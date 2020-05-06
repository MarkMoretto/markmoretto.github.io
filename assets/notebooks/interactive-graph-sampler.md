
<p hidden>
    https://github.com/jupyter-widgets/ipywidgets/blob/master/docs/source/examples/Exploring%20Graphs.ipynb
</p>

### Exploring Network Graphs


```python
%matplotlib notebook

import networkx as nx
import matplotlib.pyplot as plt
from ipywidgets import interact
```


```python
def rand_lobster(n, m, k, p):
    return nx.random_lobster(n, p, p/m)

def powerlaw_cluster(n, m, k, p):
    return nx.powerlaw_cluster_graph(n, m, p)

def nws(n, m, k, p):
    return nx.newman_watts_strogatz_graph(n, k, p)

def erdos_renyi(n, m, k, p):
    return nx.erdos_renyi_graph(n, p)

def plot_rand_graph(n, m, k, p, generator):
    g = generator(n, m, k, p)
    nx.draw(g)
    plt.show()
```


```python
interact(plot_rand_graph, n=(2,30), m=(1,10), k=(1,10), p=(0.0, 1.0, 0.001),
         generator={
             'lobster': rand_lobster,
             'power law': powerlaw_cluster,
             'Newman-Watts-Strogatz': nws,
             u'Erdős-Rényi': erdos_renyi,
         })
```


    interactive(children=(IntSlider(value=16, description='n', max=30, min=2), IntSlider(value=5, description='m',…





    <function __main__.plot_rand_graph(n, m, k, p, generator)>




```python

```
