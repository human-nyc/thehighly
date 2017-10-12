import React from 'react'
import './logo.css'
import { Link } from 'react-router-dom'

const Logo = ({color}) => (
  <Link to="/">
    <svg className="logo" fill={color} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475 111">
      <path d="M17.3 31.4c-3.5.6-6.5 2-8.9 4.3C5.8 38 3.7 41.2 2 45.2l-2-.7 3.6-18.9c.8.5 1.9 1 3.3 1.2 1.4.3 3 .4 4.8.4H43c1.8 0 3.4-.1 4.8-.4 1.3-.3 2.4-.7 3.3-1.2l3.7 18.9-2 .7c-1.8-4.1-3.9-7.3-6.3-9.6-2.5-2.2-5.5-3.6-8.9-4.2v49.2c0 3 .5 5 1.5 6.1 1 1.1 2.9 1.7 5.7 1.9v2.6H9.9v-2.6c2.9-.2 4.8-.8 5.8-1.9 1-1.1 1.5-3.1 1.5-6V31.4zM91 61.7c0-3.3-.4-5.6-1.2-6.8-.8-1.3-2.1-1.9-4-1.9-1.8 0-3.1.7-3.8 2-.8 1.3-1.2 3.6-1.2 6.7V82c0 2 .3 3.5.9 4.5.6 1 1.6 1.7 3 2.1v2.6H57.5v-2.6h.3c2 0 3.4-.5 4.3-1.5.9-1 1.3-2.7 1.3-5.1V45c0-1.5-.2-2.5-.5-3.2s-1-1.4-2.2-2.3l-4.9-4c2.6-.8 5.8-1.9 9.7-3.3 3.8-1.5 8.7-3.4 14.5-5.9v26.4c2.1-2.6 4.5-4.6 7-6 2.5-1.3 5.2-2 8-2 4.3 0 7.6 1.3 9.9 3.9 2.3 2.6 3.4 6.4 3.4 11.4v22c0 2.4.4 4.1 1.3 5.1s2.3 1.5 4.3 1.5h.3v2.6H87.1v-2.6c1.4-.4 2.4-1.1 3-2.1.6-1 .9-2.5.9-4.5V61.7zm40.2-.3h4.2c4.1 0 6.6-.4 7.6-1.1.9-.7 1.4-2.1 1.4-4 0-2.7-.5-4.7-1.4-6-1-1.3-2.4-2-4.4-2-2.5 0-4.3 1-5.5 3.1-1.3 2.1-1.9 5.4-1.9 10zm26.1 22.3c-2.6 3.1-5.5 5.4-8.8 7-3.3 1.6-6.9 2.4-10.6 2.4-3.4 0-6.7-.7-9.7-2.1-3-1.4-5.6-3.4-7.8-6-1.8-2.1-3.1-4.5-4-7-.9-2.6-1.4-5.4-1.4-8.3 0-3.1.4-5.9 1.3-8.6.9-2.7 2.2-5.2 4-7.5 1.9-2.6 4.5-4.8 7.8-6.4 3.3-1.6 6.6-2.4 10-2.4 5.9 0 10.6 1.8 14.1 5.4 3.5 3.6 5.3 8.4 5.3 14.4h-26.2c.2 5.4 1.9 9.8 5.3 13.4 3.3 3.6 7.3 5.3 12 5.3 1.8 0 3.4-.3 4.8-1 1.4-.6 2.8-1.6 3.9-2.9v4.3zm48.4-3c0 2.7.4 4.6 1.2 5.7.8 1.1 2.3 1.8 4.5 2.3v2.6H178v-2.6c2.8-.2 4.8-.8 5.8-1.9 1-1.1 1.5-3.1 1.5-6.1V37.8c0-3-.5-5-1.5-6.1-1-1.1-2.9-1.7-5.8-1.9v-2.6h33.3v2.6c-2.2.4-3.7 1.1-4.5 2.2-.8 1.1-1.2 3-1.2 5.8v15.5h15.6V37.8c0-2.7-.4-4.6-1.2-5.7-.8-1.1-2.3-1.9-4.5-2.3v-2.6h33.2v2.6c-2.8.2-4.7.8-5.7 1.9-1 1.1-1.5 3.1-1.5 6.1v42.9c0 3 .5 5 1.5 6.1 1 1.1 2.9 1.7 5.7 1.9v2.6h-33.2v-2.6c2.2-.4 3.7-1.1 4.5-2.2.8-1.1 1.2-3 1.2-5.7V56.9h-15.6l.1 23.8z"></path>
      <defs>
        <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="250.8" y="44.4" width="30.3" height="46.8">
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
        </filter>
      </defs>
      <mask maskUnits="userSpaceOnUse" x="250.8" y="44.4" width="30.3" height="46.8" id="b">
        <g>
          <path id="a" d="M281.2.2h-30.3v91h30.3V.2z"></path>
        </g>
      </mask>
      <path d="M258.4 62.8c0-1.4-.1-2.4-.5-3-.3-.6-1-1.4-2.1-2.2l-4.9-4c3.9-1.3 7.8-2.6 11.6-4 4.5-1.7 8.9-3.4 13.3-5.2V82c0 2.3.4 4 1.2 5 .8 1 2.2 1.5 4.1 1.6v2.6h-28.7v-2.6h.3c2 0 3.4-.5 4.3-1.5.9-1 1.3-2.7 1.3-5.1l.1-19.2z"></path>
      <path d="M308.2 73.2c2.3 0 4-1 5-2.9s1.5-5.1 1.5-9.5c0-4.6-.5-7.8-1.5-9.8-1-2-2.7-3-5-3-2.4 0-4 1-5.1 2.9-1 1.9-1.5 5.2-1.5 9.9 0 4.5.5 7.7 1.6 9.6 1 1.9 2.7 2.8 5 2.8m-15.3 23.9l-.3.9c-.1.3-.1.5-.1.8 0 2.2 1.4 4.2 4.1 5.8 2.7 1.6 6.2 2.4 10.3 2.4 4 0 7.2-.7 9.6-2.1 2.4-1.4 3.6-3.2 3.6-5.5 0-1.4-.5-2.5-1.5-3.3-1-.8-2.4-1.3-4.1-1.3-1.1 0-3.5.5-7.2 1.6-3.8 1.1-7 1.6-9.7 1.6-.8 0-1.6-.1-2.4-.2-.6-.2-1.5-.4-2.3-.7m.3-24.3c-2.1-1.4-3.7-3-4.8-5-1.1-2-1.7-4.2-1.7-6.6 0-4.9 2.1-8.8 6.2-11.9 4.1-3.1 9.5-4.6 16.2-4.6.8 0 1.7 0 2.5.1.9.1 1.8.2 2.7.4 1-2.6 2.5-4.6 4.5-6.1s4.3-2.2 6.9-2.2c1.9 0 3.4.5 4.6 1.6 1.2 1.1 1.8 2.5 1.8 4.1 0 1.4-.5 2.6-1.4 3.6-.9 1-2.1 1.4-3.5 1.4-1.2 0-2.7-.5-4.4-1.5-1.8-1-3-1.5-3.7-1.5-.5 0-.8.1-1.2.3-.3.2-.6.5-.9.9 4.1 1.4 7.2 3.4 9.3 6 2.1 2.6 3.2 5.6 3.2 9.1 0 4.7-2.1 8.6-6.2 11.5-4.1 3-9.5 4.4-16.2 4.4-1.8 0-3.6-.2-5.4-.5-1.8-.3-3.6-.8-5.4-1.4-1.5.2-2.6.7-3.4 1.5-.8.8-1.2 1.6-1.2 2.7 0 1.2.5 2.2 1.4 2.9.9.8 2.1 1.1 3.6 1.1 1.4 0 3.9-.7 7.6-2.1l.5-.2c3-1.1 5.4-1.9 7.2-2.4 1.8-.4 3.6-.6 5.3-.6 4.5 0 8.2 1.4 11 4.1 2.8 2.7 4.2 6.2 4.2 10.5 0 5.6-2.4 10-7.1 13.4-4.7 3.4-11 5-19 5-6.5 0-11.6-.9-15.3-2.7-3.7-1.8-5.5-4.2-5.5-7.3 0-1.2.2-2.2.7-3.2.5-.9 1.2-1.8 2.3-2.6-1.6-1.1-2.9-2.5-3.7-4.2-.9-1.7-1.3-3.6-1.3-5.7 0-2.9.8-5.4 2.4-7.5 1.8-2.1 4.1-3.7 7.2-4.8m75.5-11.1c0-3.3-.4-5.6-1.2-6.8-.8-1.3-2.1-1.9-4-1.9-1.8 0-3.1.7-3.8 2-.8 1.3-1.2 3.6-1.2 6.7V82c0 2 .3 3.5.9 4.5.6 1 1.6 1.7 3 2.1v2.6h-27.2v-2.6h.3c2 0 3.4-.5 4.3-1.5.9-1 1.3-2.7 1.3-5.1V45c0-1.5-.1-2.5-.5-3.2-.3-.6-1-1.4-2.2-2.3l-4.9-4c2.6-.8 5.8-1.9 9.7-3.3 3.9-1.5 8.7-3.4 14.5-5.9v26.4c2.1-2.6 4.5-4.6 7-6 2.5-1.3 5.2-2 8-2 4.3 0 7.6 1.3 9.9 3.9 2.3 2.6 3.4 6.4 3.4 11.4v22c0 2.4.4 4.1 1.3 5.1s2.3 1.5 4.3 1.5h.3v2.6h-27.2v-2.6c1.4-.4 2.4-1.1 3-2.1.6-1 .9-2.5.9-4.5l.1-20.3z"></path>
      <path d="M397.4 44.9c0-1.4-.2-2.4-.5-3-.3-.6-1-1.4-2.1-2.3l-4.9-4c3.9-1.2 7.8-2.6 11.6-4 4.5-1.7 8.9-3.4 13.3-5.2V82c0 2.4.4 4.1 1.3 5.1.8 1 2.3 1.5 4.3 1.5h.3v2.6h-29.1v-2.6h.3c2 0 3.4-.5 4.3-1.5.9-1 1.3-2.7 1.3-5.1V44.9h-.1z"></path>
      <g transform="translate(416.005 46.04)">
        <defs>
          <filter id="Adobe_OpacityMaskFilter_1_" filterUnits="userSpaceOnUse" x=".6" y=".8" width="57.9" height="61.8">
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
          </filter>
        </defs>
        <mask maskUnits="userSpaceOnUse" x=".6" y=".8" width="57.9" height="61.8" id="d">
          <g>
            <path id="c" d="M58.5 62.5V.8H.6v61.8h57.9z"></path>
          </g>
        </mask>
        <path d="M14.6 12.9c-2-3.8-3.6-6.3-4.9-7.6-1.4-1.3-3-2-4.7-2H4V.8h31.2v2.6c-1.2.1-2.1.3-2.7.8-.6.4-1 1.1-1 1.8 0 .5.1 1 .3 1.7.2.6.5 1.4 1 2.2l6.9 13.9L44.5 13c.5-1.1 1-2.2 1.2-3.3.3-1.1.4-2 .4-2.7 0-1.3-.4-2.2-1.1-2.7-.8-.6-2-.9-3.8-.9V.8h17.3v2.6h-.2c-2.1 0-3.9.6-5.3 1.9-1.4 1.3-3.1 3.9-5 7.9L36.3 38.3c-4 8.5-7.9 14.7-11.8 18.5-3.9 3.8-8.2 5.7-12.9 5.7-3.2 0-5.9-.8-7.9-2.5C1.6 58.3.6 56.2.6 53.7c0-2 .7-3.6 2-4.9 1.4-1.3 3-2 5.1-2 1.9 0 4.2 1.1 7 3.2.2.2.4.3.5.4 1.6 1.2 2.8 1.9 3.6 2.3.8.3 1.6.5 2.4.5 1.9 0 3.4-.9 4.6-2.7 1.2-1.8 1.8-4 1.8-6.8 0-1.8-.3-3.8-1-6s-1.8-4.8-3.3-7.6l-8.7-17.2z"></path>
      </g>
      <path className="dot" d="M258.4 9.3c0-2.5.9-4.7 2.6-6.4 1.8-1.8 3.9-2.6 6.5-2.6s4.7.9 6.5 2.6c1.8 1.8 2.6 3.9 2.6 6.4 0 2.5-.9 4.7-2.6 6.4-1.8 1.8-3.9 2.6-6.5 2.6-2.5 0-4.7-.9-6.5-2.6-1.7-1.6-2.6-3.8-2.6-6.4z"></path>
    </svg>
  </Link>
)

Logo.defaultProps = {
  color: '#000'
}

export default Logo