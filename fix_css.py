import re

with open('css/style.css', 'r') as f:
    content = f.read()

# Fix the gradient "0," to "0%," problem caused by minification
def fix_zeros(match):
    s = match.group(0)
    # Replace " 0," with " 0%,"
    s = re.sub(r'\s0,', ' 0%,', s)
    s = re.sub(r'\s0\)', ' 0%)', s)
    return s

content = re.sub(r'gradient\([^)]+\)', fix_zeros, content)

# Also let's fix light mode colors
# Increase contrast for root variables
content = content.replace('--text-main: #f8fafc;', '--text-main: #ffffff;')
content = content.replace('--text-muted: #94a3b8;', '--text-muted: #cbd5e1;')
content = content.replace('--text-soft: #cbd5e1;', '--text-soft: #e2e8f0;')

# In light mode, stats numbers are white (from base theme) but background is white. 
# We need to explicitly set .stat-number color in light mode. Let's append to body.light-mode.
light_mode_additions = """
body.light-mode .stat-number {
  color: #0f172a;
}
body.light-mode .section-title {
  color: #475569;
}
body.light-mode .df-header h3,
body.light-mode .arch-layer-body h4,
body.light-mode .why-card h4 {
  color: #0f172a;
}
body.light-mode .df-desc,
body.light-mode .arch-layer-body p,
body.light-mode .why-card p {
  color: #334155;
}
body.light-mode .distro-chip {
  background: rgba(109, 40, 217, 0.08);
  color: #4c1d95;
  border-color: rgba(109, 40, 217, 0.2);
}
"""

if 'body.light-mode .stat-number' not in content:
    content += light_mode_additions

with open('css/style.css', 'w') as f:
    f.write(content)
