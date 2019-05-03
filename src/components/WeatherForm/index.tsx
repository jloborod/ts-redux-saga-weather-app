import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { WeatherAction } from '../../types/actions';
import { getWeather } from '../../actions';
import WeatherForm from './WeatherForm';

type State = {
  city: string;
};

type Props = {
  getWeather: (city: string) => WeatherAction;
};

export class WeatherFormContainer extends React.Component<Props, State> {
  state: State = {
    city: '',
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.getWeather(this.state.city);
  };

  render() {
    return (
      <WeatherForm
        city={this.state.city}
        onChange={this.handleInputChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getWeather: bindActionCreators(getWeather, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(WeatherFormContainer);
