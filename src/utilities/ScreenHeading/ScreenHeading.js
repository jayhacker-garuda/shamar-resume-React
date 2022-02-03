

function ScreenHeading(props) {
    return (
        <>
            <div className="heading-container">
                <div className="screen-heading">
                    <span>{props.title}</span>
                </div>
                {
                    (props.subHeading) ? (
                        <div className="screen-sub-heading">
                            <span>{props.subHeading}</span>
                        </div>
                    ) : <></>
                }

                <div className="heading-seperator">
                    <div className="sperator-line">
                        <div className="sperator-blob">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ScreenHeading;
