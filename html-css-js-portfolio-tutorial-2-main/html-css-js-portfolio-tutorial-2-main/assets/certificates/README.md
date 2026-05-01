# Certificate Management Guide

## How to Add Your Certificates

### Step 1: Add Certificate Images
Store your certificate images (PNG, JPG, etc.) in this folder (`assets/certificates/`).

**Example file names:**
- `certificate-1.png`
- `certificate-2.png`
- `aws-cert.jpg`
- `google-cloud.png`

### Step 2: Update certificates.json
Edit the `assets/certificates.json` file to add your certificates. 

**Format:**
```json
{
  "certificates": [
    {
      "id": 1,
      "name": "Certificate Name",
      "issuer": "Issuer Name",
      "year": "2024",
      "description": "Brief description of the certificate",
      "image": "./assets/certificates/certificate-1.png",
      "link": "https://link-to-certificate.com"
    }
  ]
}
```

### Example:
```json
{
  "certificates": [
    {
      "id": 1,
      "name": "AWS Solutions Architect",
      "issuer": "Amazon Web Services",
      "year": "2024",
      "description": "Professional level AWS architecture certification",
      "image": "./assets/certificates/aws-cert.png",
      "link": "https://aws.amazon.com/verification"
    },
    {
      "id": 2,
      "name": "Google Cloud Associate",
      "issuer": "Google Cloud",
      "year": "2023",
      "description": "Associate cloud engineer certification",
      "image": "./assets/certificates/google-cloud.png",
      "link": "https://google.com/verify"
    }
  ]
}
```

### Fields to Update:
- **name**: Certificate title
- **issuer**: Organization that issued the certificate
- **year**: Year obtained
- **description**: Brief description
- **image**: Path to the certificate image file
- **link**: URL to verify or view the certificate (can be "#" if no link)

## How It Works
1. When someone visits your portfolio and clicks the "Certifications" box in the About Me section
2. The page reads the `certificates.json` file
3. It automatically displays all certificates you've added to the file
4. Images from the `certificates/` folder are loaded and displayed

## Tips
- Keep certificate image file names consistent and easy to remember
- Use PNG or JPG format for best compatibility
- Keep image file sizes reasonable (under 500KB) for faster loading
- Test in your browser to make sure all images and links work correctly
