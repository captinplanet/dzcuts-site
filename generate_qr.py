import qrcode

# The Data
url = "https://www.dzcutslawncare.com"

# The Configuration
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H, # High error correction (good for stickers)
    box_size=20, # Makes it high resolution
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

# Create and Save
img = qr.make_image(fill_color="black", back_color="white")
img.save("dzcuts_qr_code.png")

print(f"Success! QR code generated for {url}")