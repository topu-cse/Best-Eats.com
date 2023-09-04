import React from 'react';

const HeadlineCard = () => {
    return (
        <div>
            {/* card */}
            <div>
                {/* overlay */}
                <div>
                    <p>Sun's out, BOGO's Out</p>
                    <p>Through B/26</p>
                    <button>Order Now</button>
                </div>
                <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
            </div>
        </div>
    );
};

export default HeadlineCard;