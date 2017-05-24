import React from "react";
import {filesURL} from "../data/golbals"
// Home page component
export default class NewEvent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: "",
            desc: "",
            startDate: "",
            pic: "",
            picFile: "",
            picPreview: "",
            longitude: "",
            latitude: "",
            location: "",
            isUpdate: false
        }
    }

    componentWillMount(){
        const eventId = this.props.params.id
        if (eventId){
            this.props.getEventById(eventId, () => {
                const {event} = this.props

                this.setState({
                    title: event.title,
                    desc: event.desc,
                    startDate: event.start_date,
                    pic: event.pic,
                    picPreview: filesURL + event.pic,
                    longitude: event.longitude,
                    latitude: event.latitude,
                    location: event.location,
                    isUpdate: true
                })
            })
        }

        // this.props.newEvent(event)

    }

    render() {
        // console.log(this.props)
        // console.log(this.state)
        const picSrc = this.state.picPreview;
        let picPreviewElement = null;
        if (picSrc) {
            picPreviewElement = (<img src={picSrc} />);
        } else {
            picPreviewElement = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="page-home">
                <h4>New Event!</h4>
                <form onSubmit={e =>this.handleSubmit(e)}>
                    title:
                    <input type="text"
                           onChange={e => this.setState({title:e.target.value})}
                           value={this.state.title}/>
                    <br/>desc:
                    <input type="text"
                           onChange={e => this.setState({desc:e.target.value})}
                           value={this.state.desc}/>
                    <br/>start date:
                    <input type="text"
                           onChange={e => this.setState({startDate:e.target.value})}
                           value={this.state.startDate}/>
                    <br/>location:
                    <input type="text"
                           onChange={e => this.setState({location:e.target.value})}
                           value={this.state.location}/>
                    <br/>pic:
                    <input type="file"
                           onChange={e => this.handleImageChange(e)}
                    />
                    {picPreviewElement}
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }

    handleSubmit(e){
        e.preventDefault()

        const {isUpdate} = this.state
        const {title, desc, startDate, picFile, pic, longitude, latitude, location} = this.state
        const {id} = this.props.event
        const {router} = this.props
        const event = {
            id,
            title,
            desc,
            startDate,
            picFile,
            pic,
            longitude,
            latitude,
            location
        }

        if (isUpdate){
            this.props.updateEventReq(event)
                .then(function (response) {
                    alert(response.data.msg)
                    router.push('/events')
                })
                .catch(function (error) {
                    console.log(error)
                })
        }else{
            this.props.newEvent(event)
                .then(function (response) {
                    alert(response.data.msg)
                })
                .catch(function (error) {
                    console.log(error)
                })

        }


    }
    handleImageChange(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                picFile: file,
                picPreview: reader.result
            });
        }
        reader.readAsDataURL(file)
    }
}

