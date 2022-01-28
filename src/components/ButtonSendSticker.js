import React, { useState } from 'react';
import appConfig from '../../config.json';

export function ButtonSendSticker(props) {
  const [isOpen, setOpenState] = useState('');

  return (
    <div className='divSticker'>
        <button onClick={() => setOpenState(!isOpen)}>😋</button>
        {
          !isOpen && (
            <div className='divIsOpen'
            onClick={() => setOpenState(true)}
            >
          <div>Stickers</div>
          <ul>
            {appConfig.stickers.map((sticker) => (
              <li
              onClick={() => {
                if (Boolean(props.onStickerClick)) {
                    props.onStickerClick(sticker);
                  }
                }}
                key={sticker}
                >
                <img src={sticker} />
              </li>
            ))}
          </ul>
        </div>
        )}
    </div>
 )
}