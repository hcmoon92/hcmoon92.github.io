// Lunr.js 초기화
var idx = lunr(function () {
    this.field('title');
    this.field('content');
    this.ref('id');
    
    // JSON 데이터 불러오기
    fetch('search.json')
      .then(response => response.json())
      .then(data => {
        data.forEach((doc, index) => {
          this.add({
            id: index,
            title: doc.title,
            content: doc.content
          });
        });
      });
  });
  
  // 검색 입력 이벤트
  document.getElementById('search-box').addEventListener('input', function () {
    var query = this.value;
    var results = idx.search(query);
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
  
    results.forEach(result => {
      var li = document.createElement('li');
      li.textContent = result.ref; // Title or Content Reference
      resultsContainer.appendChild(li);
    });
  });