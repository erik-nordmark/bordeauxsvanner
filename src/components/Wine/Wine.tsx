import * as React from "react";
import './Wine.scss';

interface IWine {
    name: string;
    year: number;
    country: string;
    district: string;
    producer: string;
    type: string;
    quantity: number;
    before: number;
    from: number;
    comment?: string;
  }

  interface WineProps {
    wine: IWine;
  }

export class Wine extends React.Component<WineProps, {} > {
    
    constructor(state: any, props: any) {
        super(state, props);
        this.state = { }
    }

    render() {
        return (
            <li>
                <div>{this.props.wine.name}</div>
                <div>{this.props.wine.year}</div>
                <div>{this.props.wine.country}</div>
                <div>{this.props.wine.district}</div>
                <div>{this.props.wine.producer}</div>
                <div>{this.props.wine.type}</div>
                <div>{this.props.wine.quantity}</div>
            </li>
        );
    }
}
