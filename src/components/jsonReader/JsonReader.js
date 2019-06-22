import React, {Component} from 'react';
import './JsonReader.scss';

class JsonReader extends Component {

    constructor() {
        super();
        this.fileReader = new FileReader();
        this.state = {
            isJson: null,
            file: null
        }
    }

    formatVerify = (file) => {
        if (file && file.type === "application/json") {
            this.setState({
                isJson: true,
                file: file
            })
        } else {
            this.setState({
                isJson: false
            })
        }
    }

    fileUpload = () => {
        if (this.state.isJson) {
            this.fileReader.readAsText(this.state.file);
            this.fileReader.onload = (event) => {
                const content = JSON.parse(event.target.result);
                console.log(content)
            };
        } else {
            console.log("No file")
        }
    }
    readContent = (e) => {
        const content = e.target.result;
        console.log(content)
    }

    render() {
        return (
            <div className="page">
                <label htmlFor="file">Json File</label>
                <input id="file" type="file" accept="application/json" 
                        onChange={e => this.formatVerify(e.target.files[0])} />
                { this.state.isJson ? (
                    <div className="json">Json</div>
                ) : (
                    <div className="not-json">Not Json</div>
                )
                }
                <button onClick={this.fileUpload}>Translate</button>
            </div>
        )
    }
}

export default JsonReader