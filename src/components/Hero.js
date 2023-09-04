import React from 'react';

const Hero = () => {
    return (
        <div className='max-w-'>
            <div>
                {/* overlay */}
                <div>
                    <h1>The <span>Best</span></h1>
                    <h1>Foods <span>Delivered</span></h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' 
                src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
            </div>
        </div>
    );
};

export default Hero;