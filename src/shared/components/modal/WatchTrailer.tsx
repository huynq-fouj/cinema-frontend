import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setOptionTrailer } from "../../toolkits/watchTrailerSlice";
import ModalVideo from 'react-modal-video';

export default function WatchTrailer() {
    const dispatch = useAppDispatch();
    const { visible, url } = useAppSelector(state => state.watchTrailer);
    //const rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    const rx = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const [videoId, setVideoId] = useState("");

    useEffect(() => {
        const arr = url.match(rx);
        if(arr) {
            setVideoId(arr[2]);
        }
    }, [visible, url]);

    const handleClose = () => {
        dispatch(setOptionTrailer({
            visible: false,
            url: '',
        }));
    }

    return (
        <ModalVideo
            channel="youtube"
            youtube={{
                autoplay: 1,
                mute: 0,
            }}
            videoId={videoId}
            isOpen={visible}
            onClose={handleClose}
        />
    )
}