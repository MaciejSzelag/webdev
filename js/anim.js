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
        // scale: [3, 1],
       
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
        // rotate:[0,45],
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
        targets: '.msN_header .letter_header',
        opacity: [0, 1],
        translateX: [-200,0],
        scale: [
            {value: 1.5, easing: 'easeOutSine', duration: 400},
            {value: 1, easing: 'easeInOutQuad', duration: 200}
        ],
        color:"rgba(255,255,255,0.0)",
        // scale: [2, 1],
        rotate: [150],
        // color:"white",
        direction: 'alternate',
      
        easing: 'easeInOutCubic',
        duration: 300,
        delay: (el, i) => 80 * (i + 1)
    }).add({
        targets: '.letter_header',
        translateY: [0],
        scale: [
            // {value: 1, easing: 'easeOutSine', duration: 300},
            { value: 3, easing: 'easeInOutQuad', duration: 300 },
            {value: 1, easing: 'easeOutSine', duration: 200}
        ],
        color: [{value: "rgba(255,255,255,0.0)", easing: 'easeOutSine', duration: 50},
            { value: "rgba(0, 178, 172,0.8)", easing: 'easeOutSine', duration: 200 },
            {value: "rgba(0, 78, 179,0.8)", easing: 'easeOutSine', duration: 200}
         ],
            
        rotate:[0],
        // opacity:[1],
        duration:1000,
        // easing: "easeInOutCubic",
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
        // translateX: [150,0],
        translateX: [
            {value: -200, easing: 'easeOutSine', duration: 400},
            {value: 550, easing: 'easeInOutQuad', duration: 1000}
          ],
        // scale: [2, 1],
        // rotate: [10],
        // color:"white",
      
        direction: 'alternate',
      
        easing: 'easeInOutCubic',
        duration: 800,
        delay: (el, i) => 80 * (i + 1)
    })

    