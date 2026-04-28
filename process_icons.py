import os
from PIL import Image

files = [
    'sketchbook.png',
    'stitch.png',
    'antigravity.png',
    'canva.png',
    'Photoshop.png',
    'ChatGPT-Logo.png'
]

for file in files:
    if os.path.exists(file):
        try:
            img = Image.open(file).convert("RGBA")
            data = img.getdata()
            
            newData = []
            for item in data:
                # If the pixel has some opacity, make it pure white with the same alpha
                # (Or if it's a solid background, we might need a threshold, let's assume transparent background)
                if item[3] > 0:
                    # If it's a black/dark logo on transparent background, or colored on transparent
                    newData.append((255, 255, 255, item[3]))
                else:
                    newData.append((255, 255, 255, 0))
            
            img.putdata(newData)
            img.save("white_" + file, "PNG")
            print(f"Successfully processed {file} to white_{file}")
        except Exception as e:
            print(f"Error processing {file}: {e}")
    else:
        print(f"File not found: {file}")
