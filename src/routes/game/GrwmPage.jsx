import React from 'react';
import "./GrwmPage.css";

function embeddedVideo() {
    return (
        <div class="embedded_video_container">
            <iframe class="embedded_video_iframe"
                src="https://www.youtube.com/embed/ebGY07W2s2k?si=pVryGmjy0U266Tk6"
                title="GRWM Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen=""></iframe>
        </div>)
}

function GrwmPage() {
    return (
        <div className='main_container'>
            <div className='section_container'>
                <div className='content_container'>
                    <h1>GRWM: Walking My Cat</h1>
                </div>
                {embeddedVideo()}
                <h1>{"Try the game out yourself: "}
                    <a href="https://elinrator.itch.io/get-ready-with-me-walking-my-cat"><u>GRWM On Walking My Cat</u></a></h1>
                <div className='content_container'>
                    <div className='p_container'>
                        <h2>Instructions</h2>
                        <p>{"- Left click slowly to walk, quickly to run"}</p>
                        <p>{"- Don't let the cat get too far away or your smol hands will drop the leash"}</p>
                        <p>{"- Don't run past the cat or you'll trip"}</p>
                    </div>
                </div>
                <div className='content_container'>
                    <div className='p_container'>
                        <h2>About</h2>
                        <p>{
                            'GRWM: Walking My Cat is a 2D scrolling game with a theme on helping a little girl walk her cat. During the game, you will see some obstacles which will attract cat’s attention. What you should do is follow the cat’s speed by left clicking the mouse, make sure to not run past the cat, and not let the cat get too far away.'
                        }</p>
                        <p>{
                            'At the end of the game there is a portrait of my cat Mayo, which is also the inspiration for the cat in the game. I often walk him at the park near where I live, and he would always get distracted by animals, people, and flowers that he passes by. We often see people in the park walking their dogs, but we rarely see someone walking their cat. Every time someone sees Mayo passing by, they would call Mayo cute or clean. Because so many people like Mayo, and I love him, I thought to create this little game. When I walk Mayo, he would randomly start running when he’s excited, and lay down when he doesn’t want to walk anymore. All the overwhelming actions of the cat in the game are real behaviours of Mayo when he walks. So, please don’t get frustrated!'
                        }</p>
                        <p>{
                            'Enjoy the game and good luck!'
                        }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GrwmPage;
