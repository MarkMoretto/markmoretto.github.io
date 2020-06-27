// Inspo: https://scipython.com/book/chapter-7-matplotlib/problems/p72/the-julia-set/
// Imports: https://github.com/iodide-project/pyodide/blob/master/docs/pypi.md



// let ss = window.sessionStorage;

// ss.setItem("im_width", 500);    // Image height
// ss.setItem("im_height", 500);   // Image height
// ss.setItem("zabs_max", 10);     // Scaled coordinates of pixel
// ss.setItem("nit_max", 1000);     // Max iterations


let v_im_width = 500;
let v_im_height = 500;
let v_zabs_max= 10;
let v_nit_max = 1000;


julia_set_variables = `
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm

# Image width and height; parameters for the plot
im_width = ${v_im_width}
im_height = ${v_im_height}

c = complex(-0.1, 0.65)

zabs_max = ${v_zabs_max}
nit_max = ${v_nit_max}

xmin = -1.5
xmax = 1.5
xwidth = xmax - xmin

ymin = -1.5
ymax = 1.5
yheight = ymax - ymin
`;


julia_set_algo = `
julia = np.zeros((im_width, im_height))
for ix in range(im_width):
    for iy in range(im_height):
        nit = 0

        # Map pixel position to a point in the complex plane
        z = complex(ix / im_width * xwidth + xmin, iy / im_height * yheight + ymin)

        # Do the iterations
        while abs(z) <= zabs_max and nit < nit_max:
            z = z**2 + c
            nit += 1
        shade = 1-np.sqrt(nit / nit_max)
        ratio = nit / nit_max
        julia[ix,iy] = ratio
`;


julia_set_visual = `
fig, ax = plt.subplots()
ax.imshow(julia, interpolation='nearest', cmap=cm.hot)
# Set the tick labels to the coordinates of z0 in the complex plane
xtick_labels = np.linspace(xmin, xmax, xwidth / 0.5)
ax.set_xticks([(x-xmin) / xwidth * im_width for x in xtick_labels])
ax.set_xticklabels(['{:.1f}'.format(xtick) for xtick in xtick_labels])
ytick_labels = np.linspace(ymin, ymax, yheight / 0.5)
ax.set_yticks([(y-ymin) / yheight * im_height for y in ytick_labels])
ax.set_yticklabels(['{:.1f}'.format(ytick) for ytick in ytick_labels])
plt.show()
`;



// Import libraries.
languagePluginLoader.then(() => {
    return pyodide.loadPackage(['numpy', 'matplotlib']);
});