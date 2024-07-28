$(function () {
  var paragraphs = ['夢見る場所へ、今ここから'];
  var elementId = 'text';
  var textColors = ['#fff'];

  // ウィンドウ幅が1024px以下の場合に実行する関数
  function checkWindowWidth() {
    if ($(window).width() <= 1024) {
      displayParagraphs(paragraphs, elementId, textColors);
      $(window).off('resize', checkWindowWidth);
    }
  }

  $(window).on('resize', checkWindowWidth);

  // ページが読み込まれたときと再読み込みされたときの処理
  function onPageLoad() {
    if ($(window).width() <= 1024) {
      displayParagraphs(paragraphs, elementId, textColors);
    }
  }
  // ページが読み込まれたときの処理を実行
  onPageLoad();
  // ページが再読み込みされたときの処理を実行
  $(window).on('load', onPageLoad);

  function displayParagraphs(paragraphs, id, colors) {
    var currentIndex = 0;

    function displayNextParagraph() {
      if (currentIndex < paragraphs.length) {
        // 新しい段落を表示する前に、#text要素を空にする
        $('#' + id).empty();
        consoleText([paragraphs[currentIndex]], id, colors, function () {
          // アニメーションが完了したら次の段落へ
          currentIndex++;
          if (currentIndex < paragraphs.length) {
            setTimeout(displayNextParagraph, 1000); // 段落の表示間隔を調整
          }
        });
      }
    }

    // 最初の段落を表示開始
    displayNextParagraph();
  }

  function consoleText(words, id, colors, callback) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);

    var intervalId = window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
          if (callback) {
            callback(); // アニメーションが完了したらコールバックを呼び出す
          }
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }

      // テキストがすべて表示されたらアンダーラインを削除
      if (letterCount > words[0].length) {
        target.innerHTML = words[0];
        // アンダーラインを非表示にする
        con.style.visibility = 'hidden';
        clearInterval(intervalId); // アニメーションが完了したらインターバルをクリア
      }
    }, 200);
  }

  // main-fade-in
  let winHeight, winScroll, scrollPos;

  // ウィンドウの高さとスクロール位置を更新する関数
  function updateWindowDimensions() {
    winScroll = $(window).scrollTop();
    winHeight = $(window).height();
    scrollPos = winHeight * 0.9 + winScroll;
    scroll = winHeight * 0.5 + winScroll;
  }

  // ウィンドウがロードされたとき、リサイズされたとき、スクロールされたときに呼び出す
  $(window).on('load scroll resize', function () {
    updateWindowDimensions(); // ウィンドウの高さとスクロール位置を更新

    $(".slidein").each(function () {
      if ($(this).offset().top <= scrollPos) {
        $(this).addClass("show");
      } // } else {
      //     $(this).removeClass("show");
      // }
    });
  });
  $(window).on('load scroll resize', function () {
    updateWindowDimensions(); // ウィンドウの高さとスクロール位置を更新

    $(".slidein-1").each(function () {
      if ($(this).offset().top <= scrollPos) {
        $(this).addClass("show");
      } // } else {
      //     $(this).removeClass("show");
      // }
    });
  });
  $(window).on('load scroll resize', function () {
    updateWindowDimensions(); // ウィンドウの高さとスクロール位置を更新

    $(".slidein-2").each(function () {
      if ($(this).offset().top <= scroll) {
        $(this).addClass("show");
      } // } else {
      //     $(this).removeClass("show");
      // }
    });
  });

  // 概要-fade-in
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.element').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});

// ドロワーメニューの利用宣言  
    $(function () {
      $('.drawer').drawer();
    });
 
// TOP BACKボタン
    
$(function() {
  var topBtn = $('#page-top');    
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});