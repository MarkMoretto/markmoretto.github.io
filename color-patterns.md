<style>
.square-shape {
    width: 100px;
    height: 100px;
}    
</style>    

<script>
var colors = ['#800020', '#942862', '#8b56a0', '#6580cd', '#2ca6e2', '#800020', '#2bc7e2'];

let trgt = document.getElementByClassName("color-picker")

colors.forEach(item => document.write());

colors.each(function (color) {
  $$('.color-picker')[0].insert(
    '<div class="square-shape" style="background: ' + color + '"></div>'
  );
});

var n_colors = colors.length;
for (var i = 0; i < n_colors; i++) {
    console.log(myStringArray[i]);
    //Do something
}

</script>

#### Burgandy

<span class="color-picker"></span>

<div>
    <span class="shape" id="square" style="background-color: #800020;color:white">#800020</span>
    <span class="shape" id="square" style="background-color: #800020;color:white">#800020</span>
</div>

+ #942862