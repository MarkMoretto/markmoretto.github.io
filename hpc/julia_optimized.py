
"""
Purpose: Fractal - Julia set optimizations
Date created: 2020-06-27

Additional ref: https://codereview.stackexchange.com/questions/210271/generating-julia-set
"""

from functools import partial

import numpy as np
import matplotlib.pyplot as plt


def douady_hubbard_polynomial(z, *, c):
    """
    Monic and centered quadratic complex polynomial
    https://en.wikipedia.org/wiki/Complex_quadratic_polynomial#Map
    """
    return z ** 2 + c


def julia_set(*, mapping, min_coord, max_coord, width: int, height: int,
              n_iter: int = 256, threshold: float = 2.) -> np.ndarray:
    """
    As described in https://en.wikipedia.org/wiki/Julia_set
    :param mapping: function defining Julia set
    :param min_coordinate: bottom-left complex plane coordinate
    :param max_coordinate: upper-right complex plane coordinate
    :param height: pixels in vertical axis
    :param width: pixels in horizontal axis
    :param iterations_count: number of iterations
    :param threshold: if the magnitude of z becomes greater than the threshold we
    assume that it will diverge to infinity
    :return: 2D pixels array of intensities
    """
    im, re = np.ogrid[
            min_coord.imag: max_coord.imag: height * 1j,
            min_coord.real: max_coord.real: width * 1j,
            ]

    z = (re + 1j * im).flatten()

    # Indices of unescaped pixels
    live, = np.indices(z.shape)

    iterations = np.empty_like(z, dtype=int)

    for i in range(n_iter):

        z_live = z[live] = mapping(z[live])

        escaped = z_live.real**2 + z_live.imag**2 > threshold**2

        iterations[live[escaped]] = i

        live = live[~escaped]

    iterations[live] = n_iter - 1

    return (n_iter - iterations).reshape((height, width))


if __name__ == '__main__':
    # type: Callable[[Complex], Complex]
    mapping = partial(douady_hubbard_polynomial, c=complex(-0.7, 0.27015j))

    image = julia_set(mapping=mapping,
                      min_coord = complex(-1.5, -1),
                      max_coord = complex(1.5, 1),
                      n_iter = 256,
                      width = 1920,
                      height = 1080)
    plt.axis('off')
    plt.imshow(image, cmap='nipy_spectral', origin='lower')
    plt.show()
