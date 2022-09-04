import {useNavigate} from 'react-router'

const BackButton = () => {
    let navigate = useNavigate();

    return(
        <button
        onClick={() => {
            navigate(-1)
        }
        }
        >
            {'< Back'}
        </button>
    )
}

export default BackButton;