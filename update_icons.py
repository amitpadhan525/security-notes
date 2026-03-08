import os, glob

html_files = glob.glob("**/*.html", recursive=True)
count = 0
for f in html_files:
    with open(f, "r") as file:
        content = file.read()
    
    # Replace the script tag
    new_content = content.replace('<script src="https://unpkg.com/@phosphor-icons/web"></script>', '<link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">')
    
    if new_content != content:
        with open(f, "w") as file:
            file.write(new_content)
        count += 1

print(f"Replaced in {count} files")
