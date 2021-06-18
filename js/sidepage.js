 // 멀티 슬라이드 페이지 (Multi Slide-page)  //
 // Author : 노승민 (Seungmin Roh a.k.a NOHEMI) //
 // Year : 2013 //
 // e-mail : spandernoh@naver.com // 
 // CAUTION : 본 스크립트는 가로 1280px를 기준으로 제작되었습니다. //


$(window).load(function() {  
	$('#slideopen_1').click ( // 1번 페이지 열기 //
	function() {
		$('#slide_wrap1').animate({width:"100%"}, 200);
		$('#slide_wrap2').animate({width:"0%"}, 200);
		$('#slide_bg').animate({width:"100%"}, 200);
		$('#slidebutton_wrap').animate({width:"100%"},200);

		$('#slide_wrap1').css('right','-80px');
		$('#slide_bg').css('right','-80px');
		$('#slidebutton_wrap').css('right','-40px');

		$('#slide_wrap1').css('z-index', '998');
		$('#slide_wrap2').css('z-index', '997');

		$('#btn1').attr('src', 'images/dual/page1_button_off.png');
		$('#btn2').attr('src', 'images/dual/page2_button_on.png');

		$('#btn1').css('cursor', 'default');
		$('#btn2').css('cursor', 'pointer');
		$('#btn_off').css('cursor', 'default');
		$('.slidepage_hide a').css('display', 'none');
		return false; 
		}
	);

	$('#slideopen_2').click ( // 2번 페이지 열기 //
	function() {
		$('#slide_wrap1').animate({width:"0%"}, 200);
		$('#slide_wrap2').animate({width:"100%"}, 200);
		$('#slide_bg').animate({width:"100%"}, 200);
		$('#slidebutton_wrap').animate({width:"100%"}, 200);

		$('#slide_wrap2').css('right','-80px');
		$('#slide_bg').css('right','-80px');
		$('#slidebutton_wrap').css('right','-40px');

		$('#slide_wrap1').css('z-index', '997');
		$('#slide_wrap2').css('z-index', '998');

		$('#btn1').attr('src', 'images/dual/page1_button_on.png');
		$('#btn2').attr('src', 'images/dual/page2_button_off.png');

		$('#btn1').css('cursor', 'pointer');
		$('#btn2').css('cursor', 'default');
		$('#btn_off').css('cursor', 'default');
		$('.slidepage_hide a').css('display', 'none');
		return false; 
		}
	);

	$('.slidepage_close').click ( /* 컨텐츠 페이지 내 닫기 버튼 */
		function() {
		$('#slide_wrap1').animate({width:"1280px"}, 200);
		$('#slide_wrap2').animate({width:"1280px"}, 200);
		$('#slidebutton_wrap').animate({width:"1280px"}, 200);
		$('#slide_bg').animate({width:"1280px"}, 200);

		$('#slide_wrap1').css('right','-1200px');
		$('#slide_wrap2').css('right','-1200px');
		$('#slidebutton_wrap').css('right','-1160px');
		$('#slide_bg').css('right','-1200px');
					
		$('#btn1').attr('src', 'images/dual/page1_button_on.png');
		$('#btn2').attr('src', 'images/dual/page2_button_on.png');
		$('#btn_off').attr('src', 'images/dual/side_off_button_1.png');

		$('#btn1').css('cursor', 'pointer');
		$('#btn2').css('cursor', 'pointer');
		$('#btn_off').css('cursor', 'pointer');
		$('.slidepage_hide a').css('display', 'block');
		return false;
		}
	);

	$('.slidepage_hide').click ( /* 숨기기 버튼 */
		function() {
						if ($('.slidepage_hide a').css("display") == ("block")) /* 숨기기 버튼이 보이는 상태에서만 작동하도록 설정 */
								{
								$('#slide_wrap1').animate({right:"-1281px"}, 200);
								$('#slide_wrap2').animate({right:"-1281px"}, 200);
								$('#slide_bg').animate({right:"-1281px"}, 200);
								$('#slidebutton_wrap').animate({right:"-1241px"}, 200);

								$('.slidepage_hide a').css('display', 'none');
								}
					}
		);

	$('.preview_close').click ( /* 풋스아울렛, 풋스트립 닫기 버튼 */
		function() {
			if ($('.slidepage_hide a').css("display") == ("none")) /* 페이지가 열려있는 경우 */
				{
					$('#slide_wrap1').css({width:"1280px"}, 200);
					$('#slide_wrap2').css({width:"1280px"}, 200);
					$('#slidebutton_wrap').css({width:"1280px"}, 200);
					$('#slide_bg').css({width:"1280px"}, 200);

					$('#slide_wrap1').animate({right:"-1281px"}, 200);
					$('#slide_wrap2').animate({right:"-1281px"}, 200);
					$('#slide_bg').animate({right:"-1281px"}, 200);
					$('#slidebutton_wrap').animate({right:"-1241px"}, 200);
						
					$('#btn1').attr('src', 'images/dual/page1_button_on.png');
					$('#btn2').attr('src', 'images/dual/page2_button_on.png');
					$('#btn_off').attr('src', 'images/dual/side_off_button_1.png');
						
					$('#btn1').css('cursor', 'pointer');
					$('#btn2').css('cursor', 'pointer');
					$('#btn_off').css('cursor', 'pointer');
					$('.slidepage_hide a').css('display', 'none');
					return false;				
				}

			else {
				$('#slide_wrap1').animate({right:"-1281px"}, 200);
				$('#slide_wrap2').animate({right:"-1281px"}, 200);
				$('#slide_bg').animate({right:"-1281px"}, 200);
				$('#slidebutton_wrap').animate({right:"-1241px"}, 200);

				$('.slidepage_hide a').css('display', 'none');
				return false;
			}
		}
	);
});