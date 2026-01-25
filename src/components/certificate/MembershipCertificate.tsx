import React from 'react'
import type { User } from '@/types/api'
import logoImage from '@/assets/alumni/logo.jpg'
import backgroundImage from '@/assets/alumni/gallery/1.jpg'

interface MembershipCertificateProps {
  user: User
}

export function MembershipCertificate({ user }: MembershipCertificateProps) {
  // Extract certificate data from user
  const membershipApp = user.membership_application
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
  
  // Format membership type for display
  const membershipTypeDisplay = membershipType === 'LIFETIME' 
    ? 'LIFETIME' 
    : membershipType === 'ASSOCIATE' 
    ? 'ASSOCIATE' 
    : 'GENERAL'
  
  // Calculate valid until date
  const issuedDate = new Date()
  const issuedDateFormatted = issuedDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  
  let validUntilText = ''
  if (membershipType === 'LIFETIME') {
    validUntilText = 'Lifetime'
  } else {
    // For GENERAL/ASSOCIATE, calculate based on payment_years or default to 1 year
    const paymentYears = membershipApp?.payment_years || 1
    const validUntilDate = new Date(issuedDate)
    validUntilDate.setFullYear(validUntilDate.getFullYear() + paymentYears)
    validUntilText = validUntilDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

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
        padding: '20mm',
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Background overlay with opacity */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          zIndex: 1,
        }}
      />
      
      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header Section */}
        <div style={{ marginBottom: '15mm' }}>
          {/* Logo */}
          <div style={{ marginBottom: '10mm' }}>
            <img
              src={logoImage}
              alt="JSSAA Logo"
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
              }}
            />
          </div>
          
          {/* Association Name - English */}
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1a365d',
              marginBottom: '5mm',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            JAHAPUR SECONDARY SCHOOL ALUMNI ASSOCIATION (JSSAA)
          </h1>
          
          {/* Association Name - Bengali */}
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#1a365d',
              marginBottom: '3mm',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            জাহাপুর মাধ্যমিক বিদ্যালয় অ্যালামনাই অ্যাসোসিয়েশন
          </h2>
          
          {/* Motto - Bengali */}
          <p
            style={{
              fontSize: '14px',
              color: '#1a365d',
              marginBottom: '8mm',
              textAlign: 'center',
              fontStyle: 'italic',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            বন্ধন হোক শক্তি, স্মৃতি হোক প্রেরণা
          </p>
          
          {/* Certificate Title */}
          <h3
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#2563eb',
              textAlign: 'center',
              marginBottom: '15mm',
              fontStyle: 'italic',
              fontFamily: 'Georgia, serif',
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
            justifyContent: 'center',
            padding: '0 10mm',
          }}
        >
          <p
            style={{
              fontSize: '16px',
              color: '#000000',
              lineHeight: '2.0',
              textAlign: 'justify',
              marginBottom: '10mm',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            This is to certify that {namePrefix && `${namePrefix} `}
            <span style={{ display: 'inline-block', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '0 5px', lineHeight: '1.2' }}>{memberName}</span>,
            Membership Number: <span style={{ display: 'inline-block', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '0 5px', lineHeight: '1.2' }}>{memberId}</span>, Batch: <span style={{ display: 'inline-block', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '0 5px', lineHeight: '1.2' }}>{batchYear}</span> is
            hereby enrolled as a <span style={{ display: 'inline-block', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '0 5px', lineHeight: '1.2' }}>{membershipTypeDisplay}</span> MEMBER of Jahapur Secondary School Alumni Association (JSSAA). This
            membership is valid until <span style={{ display: 'inline-block', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '0 5px', lineHeight: '1.2' }}>{validUntilText}</span> (Not applicable for Lifetime Membership).
          </p>
          
          <p
            style={{
              fontSize: '16px',
              color: '#000000',
              lineHeight: '2.0',
              textAlign: 'justify',
              marginBottom: '15mm',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            The member is entitled to enjoy all rights and privileges as per
            the constitution of JSSAA and abide by its rules and regulations.
          </p>
        </div>
        
        {/* Footer Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 'auto',
            paddingTop: '10mm',
          }}
        >
          {/* Left Signature */}
          <div style={{ flex: 1, textAlign: 'left' }}>
            <div
              style={{
                borderTop: '1px solid #000',
                width: '150px',
                marginBottom: '5mm',
                marginTop: '20mm',
              }}
            />
            <p
              style={{
                fontSize: '12px',
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
                marginBottom: '2mm',
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
            <p
              style={{
                fontSize: '10px',
                color: '#000000',
                marginTop: '5mm',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Issued on: <strong>{issuedDateFormatted}</strong>
            </p>
          </div>
          
          {/* Right Signature */}
          <div style={{ flex: 1, textAlign: 'right' }}>
            <div
              style={{
                borderTop: '1px solid #000',
                width: '150px',
                marginBottom: '5mm',
                marginTop: '20mm',
                marginLeft: 'auto',
              }}
            />
            <p
              style={{
                fontSize: '12px',
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
                marginBottom: '2mm',
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
        
        {/* Disclaimer */}
        <p
          style={{
            fontSize: '9px',
            color: '#666666',
            textAlign: 'center',
            marginTop: '5mm',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          This is an auto-generated certificate and does not require a physical
          signature.
        </p>
      </div>
    </div>
  )
}
