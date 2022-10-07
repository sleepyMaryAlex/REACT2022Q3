import React from 'react';
import './Switcher.css';

class Switcher extends React.Component<{ handleSwitcherChange: (favorite: boolean) => void }> {
  switcherRef: React.RefObject<HTMLInputElement>;
  constructor(props: { handleSwitcherChange: (favorite: boolean) => void }) {
    super(props);
    this.switcherRef = React.createRef();
  }

  handleChange() {
    const favorite = this.switcherRef.current?.checked as boolean;
    this.props.handleSwitcherChange(favorite);
  }

  render() {
    return (
      <div className="switcher__container">
        <input
          type="checkbox"
          className="switcher"
          id="switcher"
          name="switcher"
          ref={this.switcherRef}
          onClick={this.handleChange.bind(this)}
        />
        <label className="switcher__label" htmlFor="switcher">
          FAVORITE
        </label>
      </div>
    );
  }
}

export default Switcher;
