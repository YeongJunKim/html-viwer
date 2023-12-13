
document.addEventListener('DOMContentLoaded', function () {
    // 파일 경로 설정
var filePath = 'data/add-curved-parent-artery-0fd1cf1/1_0.html';

    // fetch API를 사용하여 파일 가져오기
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(htmlContent => {
            // 파일 내용을 가져와서 content div에 삽입
            document.getElementById('content').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error during fetch:', error);
        });
});