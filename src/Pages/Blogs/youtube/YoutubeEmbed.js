import PropTypes from 'prop-types'
import React from 'react'
import './YoutubeEmbed.scss'

function YoutubeEmbed ({embedId, title}){
    return <div className='d-flex flex-column gap-3'>
        <iframe
        className='youtubefram'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameborder = "2"
        allowfullscreen="true"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
        />
        <div className='text-start'>
            {title}
        </div>
    </div>
}
// }haqjCg5qsDk

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;