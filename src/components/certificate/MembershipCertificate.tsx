import type { User } from '@/types/api'
import logoImage from '@/assets/alumni/logo.jpg'
import backgroundImage from '@/assets/alumni/gallery/1.jpg'

interface MembershipCertificateProps {
  user: User
}

export function MembershipCertificate({ user }: MembershipCertificateProps) {
  // Extract certificate data from user
  const membershipApp = user.membership_application
  
  // Debug logging (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log('User Data:', user)
    console.log('Membership Application:', membershipApp)
    console.log('Membership Application Type:', typeof membershipApp)
    console.log('Membership Application Keys:', membershipApp ? Object.keys(membershipApp) : 'null/undefined')
    console.log('Approved At:', membershipApp?.approved_at)
  }
  
  const memberName = user.name || 'N/A'
  const memberId = user.member_id || 'N/A'
  const membershipType = user.primary_member_type || 'GENERAL'
  
  // Determine gender prefix (optional - use if available from membership_application)
  const gender = membershipApp?.gender
  const namePrefix = gender === 'FEMALE' ? 'Ms.' : gender === 'MALE' ? 'Mr.' : ''
  
  // Determine batch year - try to extract from member_id format (e.g., "G-2000-0001") or use membership_application
  let batchYear: string | number = 'N/A'
  if (membershipApp?.ssc_year) {
    batchYear = membershipApp.ssc_year
  } else if (membershipApp?.jsc_year) {
    batchYear = membershipApp.jsc_year
  } else if (memberId && memberId !== 'N/A') {
    // Try to extract year from member_id format: "G-2000-0001" or "LT-2020-0002"
    const parts = memberId.split('-')
    if (parts.length >= 2 && !isNaN(Number(parts[1]))) {
      batchYear = parts[1]
    }
  }
  
  // Format membership type for display (lowercase for display in sentence)
  const membershipTypeDisplay = membershipType === 'LIFETIME' 
    ? 'LIFETIME' 
    : membershipType === 'ASSOCIATE' 
    ? 'ASSOCIATE' 
    : 'GENERAL'
  
  // Calculate valid until date
  // Use approved_at as the start date, or fallback to current date if not available
  let startDate: Date
  if (membershipApp?.approved_at) {
    try {
      const parsedDate = new Date(membershipApp.approved_at)
      // Check if date is valid
      if (isNaN(parsedDate.getTime())) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Invalid approved_at date:', membershipApp.approved_at, 'Using current date')
        }
        startDate = new Date()
      } else {
        startDate = parsedDate
        if (process.env.NODE_ENV === 'development') {
          console.log('Parsed approved_at date:', startDate.toISOString(), 'Original:', membershipApp.approved_at)
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error parsing approved_at date:', error, membershipApp.approved_at)
      }
      startDate = new Date()
    }
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.warn('No approved_at date found in membership application. Available fields:', Object.keys(membershipApp || {}))
    }
    startDate = new Date()
  }
  
  const issuedDateFormatted = startDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  
  let validUntilText = ''
  if (membershipType === 'LIFETIME') {
    validUntilText = 'Lifetime'
  } else {
    // For GENERAL/ASSOCIATE, calculate based on payment_years or default to 1 year
    // payment_years might be a string (e.g., "1") or number
    const paymentYearsRaw = membershipApp?.payment_years
    let paymentYears = 1
    
    if (paymentYearsRaw !== null && paymentYearsRaw !== undefined) {
      // Handle string values (convert to number)
      if (typeof paymentYearsRaw === 'string') {
        const parsed = parseInt(paymentYearsRaw, 10)
        if (!isNaN(parsed) && parsed > 0) {
          paymentYears = parsed
        }
      } else if (typeof paymentYearsRaw === 'number' && paymentYearsRaw > 0) {
        paymentYears = paymentYearsRaw
      }
    }
    
    // Calculate valid until date from approval date
    const validUntilDate = new Date(startDate)
    validUntilDate.setFullYear(validUntilDate.getFullYear() + paymentYears)
    validUntilText = validUntilDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  // Green color matching the template - using RGB format for better PDF compatibility
  const greenColor = 'rgb(26, 95, 63)'

  return (
    <div
      id="membership-certificate"
      style={{
        width: '297mm',
        height: '210mm',
        position: 'relative',
        backgroundColor: '#ffffff',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '15mm',
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Overlay for text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          zIndex: 0,
        }}
      />
      {/* Content */}
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header Section - Logo and Association Name */}
        <div style={{ marginBottom: '10mm', position: 'relative' }}>
          {/* Logo and Association Names Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Logo - positioned on the left */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <img
                src={logoImage}
                alt="JSSAA Logo"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                }}
              />
            </div>
            
            {/* Association Names Container - centered */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1mm', alignItems: 'center' }}>
              {/* Association Name - English */}
              <h1
                style={{
                  fontSize: '22px',
                  fontWeight: 'bold',
                  color: greenColor,
                  marginBottom: 0,
                  textAlign: 'center',
                  fontFamily: 'Arial, sans-serif',
                  lineHeight: '1.3',
                }}
              >
                JAHAPUR SECONDARY SCHOOL ALUMNI ASSOCIATION (JSSAA)
              </h1>
              
              {/* Association Name - Bengali */}
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: greenColor,
                  marginBottom: 0,
                  textAlign: 'center',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                জাহাপুর মাধ্যমিক বিদ্যালয় অ্যালামনাই অ্যাসোসিয়েশন
              </h2>
            </div>
          </div>
          
          {/* Slogan - Bengali */}
          <p
            style={{
              fontSize: '14px',
              color: greenColor,
              marginBottom: '2mm',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            বন্ধন হোক শক্তি, স্মৃতি হোক প্রেরণা
          </p>
          
          {/* Certificate Title */}
          <h3
            style={{
              fontSize: '36px',
              fontWeight: 'normal',
              color: greenColor,
              textAlign: 'center',
              marginBottom: '10mm',
              fontStyle: 'italic',
              fontFamily: 'Times New Roman, serif',
            }}
          >
            Membership Certificate
          </h3>
        </div>
        
        {/* Body Section */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '0 15mm',
            minHeight: 0,
          }}
        >
          {/* Main Certificate Text */}
          <p
            style={{
              fontSize: '20px',
              color: '#000000',
              lineHeight: '1.8',
              textAlign: 'center',
              marginBottom: '8mm',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            This is to certify that {namePrefix && `${namePrefix} `}
            <span style={{ 
              display: 'inline-block', 
              borderBottom: '2px solid #000', 
              minWidth: '120px',
              paddingBottom: '2px',
              textAlign: 'center',
            }}>{memberName}</span>, Membership Number: <span style={{ 
              display: 'inline-block', 
              borderBottom: '2px solid #000', 
              minWidth: '80px',
              paddingBottom: '2px',
              textAlign: 'center',
            }}>{memberId}</span>, Batch: <span style={{ 
              display: 'inline-block', 
              borderBottom: '2px solid #000', 
              minWidth: '60px',
              paddingBottom: '2px',
              textAlign: 'center',
            }}>{batchYear}</span> is hereby enrolled as a <span style={{ 
              display: 'inline-block', 
              borderBottom: '2px solid #000', 
              minWidth: '80px',
              paddingBottom: '2px',
              textAlign: 'center',
            }}>{membershipTypeDisplay}</span> MEMBER of Jahapur Secondary School Alumni Association (JSSAA). This membership is valid till <span style={{ 
              display: 'inline-block', 
              borderBottom: '2px solid #000', 
              minWidth: '100px',
              paddingBottom: '2px',
              textAlign: 'center',
            }}>{validUntilText}</span>.
          </p>
          
          {/* Rights and Privileges Statement */}
          <p
            style={{
              fontSize: '20px',
              color: '#000000',
              lineHeight: '1.8',
              textAlign: 'center',
              marginBottom: '5mm',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            The member is entitled to enjoy all rights and privileges as per the constitution of JSSAA and abide by its rules and regulations.
          </p>
        </div>
        
        {/* Footer Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '5mm',
            flexShrink: 0,
          }}
        >
          {/* Signatures Container */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '70mm',
              width: '100%',
              marginBottom: '3mm',
            }}
          >
            {/* Left Signature */}
            <div style={{ textAlign: 'center' }}>
              {/* Signature Line */}
              <div
                style={{
                  borderTop: '1px solid #000',
                  width: '180px',
                  marginBottom: '4mm',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: '#000000',
                  marginBottom: '2mm',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                Md. Mostafijur Rahman Nanna
              </p>
              <p
                style={{
                  fontSize: '11px',
                  color: '#000000',
                  marginBottom: '1mm',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                General Secretary
              </p>
              <p
                style={{
                  fontSize: '11px',
                  color: '#000000',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                Jahapur Secondary School Alumni Association (JSSAA)
              </p>
            </div>
            
            {/* Right Signature */}
            <div style={{ textAlign: 'center' }}>
              {/* Signature Line */}
              <div
                style={{
                  borderTop: '1px solid #000',
                  width: '180px',
                  marginBottom: '4mm',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: '#000000',
                  marginBottom: '2mm',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                Major (Rtd.) Md. Rustom Ali
              </p>
              <p
                style={{
                  fontSize: '11px',
                  color: '#000000',
                  marginBottom: '1mm',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                President
              </p>
              <p
                style={{
                  fontSize: '11px',
                  color: '#000000',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                Jahapur Secondary School Alumni Association (JSSAA)
              </p>
            </div>
          </div>
          
          {/* Issued Date */}
          <p
            style={{
              fontSize: '10px',
              color: '#000000',
              fontFamily: 'Arial, sans-serif',
              textAlign: 'center',
            }}
          >
            Issued on: <span style={{ borderBottom: '1px solid #000', paddingBottom: '1px' }}>{issuedDateFormatted}</span>
          </p>
        </div>
        
        {/* Disclaimer */}
        <p
          style={{
            fontSize: '9px',
            color: '#999999',
            textAlign: 'center',
            marginTop: '3mm',
            fontFamily: 'Arial, sans-serif',
            flexShrink: 0,
          }}
        >
          This is an auto-generated certificate and does not require a physical signature.
        </p>
      </div>
    </div>
  )
}
