import Typist from 'react-typist';
const cursor = {
    element: '_',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
}

export default ({color}) => (
    <div className="is-hidden-touch">
        <Typist cursor={cursor}>
            I'm <span>Nut</span>tawut
        </Typist>
        <style jsx>{`
            div {
                color: ${color};
                font-size: 8em;
                font-weight: bold;
            }
            span {
                color: #c0392b;
            }
            @media screen and ( max-height: 690px ) {
                div {
                    display: none;
                }
            }
        `}</style>
    </div> 
)