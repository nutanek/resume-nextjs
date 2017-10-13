import Typist from 'react-typist';
const cursor = {
    element: '_',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
}

export default () => (
    <div>
        <Typist cursor={cursor}>
            I'm <span>Nut</span>tawut
        </Typist>
        <style jsx>{`
            div {
                font-size: 8em;
                font-weight: bold;
            }
            span {
                color: #c0392b;
            }
        `}</style>
    </div> 
    
)