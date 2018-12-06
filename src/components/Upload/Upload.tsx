import * as React from "react";
import * as request from "request-promise";
import Dropzone from 'react-dropzone'
import './Upload.scss'

const API_URI = 'http://18.185.139.188:3000'

interface UploadState {
    files: any,
}
export class Upload extends React.Component<{}, UploadState > {
    
    constructor(state: any, props: any) {
        super(state, props);
        this.state = { files: [] }
    }

    onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    
            acceptedFiles.forEach( (file: any) => {
                const reader = new FileReader();
                reader.readAsText(file, 'utf-8');
                reader.onload = () => {
                    const fileAsBinaryString = reader.result;
                    console.log('file reading was successfull');
                    console.log(fileAsBinaryString);
                    // do whatever you want with the file content
                    this.upload(fileAsBinaryString);
                };
                reader.onabort = () => console.log('file reading was aborted');
                reader.onerror = () => console.log('file reading has failed');
        
            });
    }

    onCancel() {
        this.setState({
          files: []
        });
    }

    private upload(file: any) {

        var options = {
            method: 'POST',
            uri: API_URI + '/post/wines',
            headers : {		
                'User-Agent': 'Request-Promise',
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            json: true,
            body: {
                data: file
            },
        };

        request.post(options)
            .then(function (parsedBody) {
                // POST succeeded...
                console.log(parsedBody);
            })
            .catch(function (err) {
                // POST failed...
                console.log(err);
            });
    }

    render() {
        return (
            <div className="upload">
                {/* <input type="file" name="" id="" onChange={this.handleselectedFile} />
                <button onClick={this.handleUpload}>Upload</button> */}
                <Dropzone onDrop={this.onDrop.bind(this)} onFileDialogCancel={this.onCancel.bind(this)}>
                    <p>Dra och släpp filen, eller tryck för att bläddra.</p>
                </Dropzone>
            </div>
        );
    }
}
