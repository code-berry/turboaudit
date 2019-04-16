import { CountUp } from '/js/countUp.js';

let anim8 = () => {
	let countUp1 = new CountUp('count1', 2000);
	let countUp2 = new CountUp('count2', 85);
	let countUp3 = new CountUp('count3', 32);
	let countUp4 = new CountUp('count4', 18);
	countUp1.start();
	countUp2.start();
	countUp3.start();
	countUp4.start();
}

$(window).scroll((event)=> {
	let scroll = $(window).scrollTop();
	if (scroll > 790) {
		anim8();
		$(window).off();
	}
});


AOS.init();