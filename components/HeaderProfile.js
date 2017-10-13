export default () => (
    <figure className="image">
        <img src="/static/images/profile.png" />
        <style jsx>{`
            figure {
                margin: 0 auto;
                width: 300px;
                height: 300px;
            }
            img {
                -webkit-transition: -webkit-transform .8s ease-in-out;
                transition: transform .8s ease-in-out;
            }
            img:hover {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        `}</style>
    </figure>
)