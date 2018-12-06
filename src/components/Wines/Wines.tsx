import * as React from "react";
import * as request from "request-promise";

import { Wine } from '../Wine/Wine';

const API_URI = 'http://18.185.139.188:3000'

interface WinesState {
    wines: any,
}
export class Wines extends React.Component<{}, WinesState> {

    constructor(state: any, props: any) {
        super(state, props);
        this.state = { wines: [] }
        this.getWines();
    }

    private getWines() {

        var options = {
            method: 'GET',
            uri: API_URI + '/get/wines',
        };

        request.get(options)
            .then(parsedBody => {

                console.log(typeof parsedBody);
                const wines = JSON.parse(parsedBody);
                console.log(typeof wines);

                this.setState(() => ({
                    wines: wines
                }));
            })
            .catch(function (err) {
                // POST failed...
                console.log(err);
            });
    }

    render() {

        var wines = this.state.wines;

        return (
            <div>
                <ul>
                    {
                        this.state.wines.map((w: any) => (
                            <Wine key={w._id} wine={w} />
                        ))
                    }
                </ul>
            </div>

        );
    }
}
