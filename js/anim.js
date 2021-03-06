const textWrapper = document.querySelector('.msN');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
        loop: true,
    }).add({
        targets: '.msN',
        delay:4000
    }).add({
        targets: '.msN .letter',
        opacity: [0, 1],
        translateX: [150,0],
        direction: 'alternate',
        easing: 'easeInOutCubic',
        duration: 1500,
        delay: (el, i) => 80 * (i + 1)
    }).add({
        targets: '.letter',
        delay:10000
    }).add({
        targets: '.letter',
        translateX: [0,-100],
        scale: [1, 2],
        opacity:[1,0],
        duration:1000,
        easing: "easeInOutCubic",
        delay: (el, i) => 50 * (i + 1)
    })
    const headerTextWrapper = document.querySelector('.msN_header');
    headerTextWrapper.innerHTML = headerTextWrapper.textContent.replace(/\S/g, "<span class='letter_header'>$&</span>");
    anime.timeline({
        loop: false,
    }).add({
        targets: '.msN_header',
        delay:1500
    }).add({
        targets: '.letter_header',
        translateY: [
            { value: 100, easing: 'easeInOutQuad', duration: 400 },
            { value: 0, easing: 'easeInOutQuad', duration: 700 },
            { value: -200, easing: 'easeInOutQuad', duration: 400 },
            { value: 0, easing: 'easeInOutQuad', duration: 700 }     
        ],
        opacity: [0, 1],
        color: [{value: "rgba(255,255,255,0.0)", easing: 'easeOutSine', duration: 50},
            { value: "rgba(0, 78, 179,0.4)", easing: 'easeOutSine', duration: 1200 },
            { value: "rgb(0, 206, 144)", easing: 'easeOutSine', duration: 100, delay: 1400 },
            {value: "rgb(193, 145, 0)", easing: 'easeOutSine', duration: 600},
            { value: "rgb(160, 0, 247)", easing: 'easeOutSine', duration: 100},
            {value: "rgb(0, 78, 179)", easing: 'easeOutSine', duration: 600}
        ],
        scale: [
            { value: 1.5, easing: 'easeInOutQuad', duration: 400},
            { value: 1, easing: 'easeOutSine', duration: 700 },
            { value: 1.5, easing: 'easeInOutQuad', duration: 400},
            { value: 1, easing: 'easeOutSine', duration: 700 }
        ],
        duration:2000,
        delay: (el, i) => 50 * (i + 1)
    })

    const EntranceTextWrapper = document.querySelector('.animation-msN ');
    EntranceTextWrapper.innerHTML = EntranceTextWrapper.textContent.replace(/\S/g, "<span class='letter_entarance'>$&</span>");
    
    anime.timeline({
        loop: false,
    }).add({
        targets: '.animation-msN ',

    }).add({
        targets: '.animation-msN .letter_entarance',
        opacity: [1, 0],
        translateY: [
            { value: -100, easing: 'easeInOutQuad', duration: 400 },
            { value: 0, easing: 'easeInOutQuad', duration: 700 }         
      
        ],
        direction: 'alternate',
        easing: 'easeInOutCubic',
        duration: 800,
        delay: (el, i) => 80 * (i + 1)
    })