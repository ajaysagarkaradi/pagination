const center = document.createElement("div");
center.className = "center";

center.innerHTML = `
  <div class="pagination">
 
  <a href="#">First</a>
  <a href="#">Previous</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#" class="active">5</a>
  <a href="#">6</a>
   <a href="#">7</a>
    <a href="#">8</a>
     <a href="#">9</a>
  </div>
`;

document.body.append(center);