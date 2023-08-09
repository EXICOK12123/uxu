const btn = document.querySelector('.label');
const point = document.querySelector('select');
const texts = document.querySelector('#text');
const form = document.querySelector('#data');
//           必应   百度   
const arr = ['wd', 'q', 'text', 'query', 'w', 'keyword', 'm=Index&a=fenlei&k'];
//                 简书（CSDN,爱给网，）
// btn.addEventListener('click', function() {

// })
btn.onclick = function() {
    const p = point.value;
    const text = texts.value;
    let str = '';
    if (p.includes('bing')) {
        str = '?' + arr[1] + '=' + text;
    }
    if (p.includes('baidu')) {
        str = '?' + arr[0] + '=' + text;
    }
    
    if (p.includes('yandex')) {
        str = '?' + arr[2] + '=' + text;
    }
    if (p.includes('juejin')) {
        str = '?' + arr[3] + '=' + text;
    }
    if (p.includes('cnblogs')) {
        str = '?' + arr[4] + '=' + text;
    }
    if (p.includes('jianshu')) {
        str = '?' + arr[1] + '=' + text;
    }
    if (p.includes('csdn')) {
        str = '?' + arr[1] + '=' + text;
    }
    if (p.includes('yuansu')) {
        str = '?' + arr[6] + '=' + text;
    }
    if (p.includes('aigei')) {
        str = '?' + arr[1] + '=' + text;
    }
    if (p.includes('bilibili')) {
        str = '?' + arr[5] + '=' + text;
    }
    if (p.includes('haiantv')) {
        str = '/' + text + '/';
        alert('该搜索比较缓慢，请您耐心等待');
    }
    console.log(p + str);
    window.location.href = p + str;
}



point.onchange = function() {
    const p = point.value;
    if (p.includes('yuansu')) {
        texts.setAttribute('placeholder', '');
    }
}

document.onkeyup = function(e) {
    if (e.keyCode == 1) {
        btn.click();
    }
}

