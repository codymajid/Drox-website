import styles from './map.module.scss';


const Map = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.419952121088!2d67.09230588006629!3d24.917759785978983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338cd9867c58f%3A0xc1507c3c3825eb1e!2sNipa%20Chowrangi%20Bus%20Stop!5e0!3m2!1sen!2s!4v1685005235443!5m2!1sen!2s"
                width="600"
                height="450"
                style={{border: "0"}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default Map;