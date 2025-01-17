'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autocompletionRequestBuilder = require('../utils/autocompletionRequestBuilder');

var _autocompletionRequestBuilder2 = _interopRequireDefault(_autocompletionRequestBuilder);

var _debounce = require('../utils/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _customPropTypes = require('../utils/customPropTypes');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GooglePlacesAutocomplete = function (_Component) {
  _inherits(GooglePlacesAutocomplete, _Component);

  function GooglePlacesAutocomplete(props) {
    _classCallCheck(this, GooglePlacesAutocomplete);

    var _this = _possibleConstructorReturn(this, (GooglePlacesAutocomplete.__proto__ || Object.getPrototypeOf(GooglePlacesAutocomplete)).call(this, props));

    _this.debouncedFetchSuggestions = (0, _debounce2.default)(_this.fetchSuggestions, _this.props.debounce);

    _this.fetchSuggestions = function () {
      var value = _this.state.value;
      var _this$props = _this.props,
          autocompletionRequest = _this$props.autocompletionRequest,
          propValue = _this$props.value;


      _this.setState({ loading: true });
      _this.placesService.getPlacePredictions(_extends({}, (0, _autocompletionRequestBuilder2.default)(autocompletionRequest), {
        input: value || propValue
      }), _this.fetchSuggestionsCallback);
    };

    _this.state = {
      activeSuggestion: null,
      loading: false,
      placesServiceStatus: null,
      suggestions: [],
      value: props.initialValue
    };

    _this.changeActiveSuggestion = _this.changeActiveSuggestion.bind(_this);
    _this.changeValue = _this.changeValue.bind(_this);
    _this.clearSuggestions = _this.clearSuggestions.bind(_this);
    _this.fetchSuggestions = _this.fetchSuggestions.bind(_this);
    _this.fetchSuggestionsCallback = _this.fetchSuggestionsCallback.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.initalizeService = _this.initializeService.bind(_this);
    _this.onSuggestionSelect = _this.onSuggestionSelect.bind(_this);
    _this.renderInput = _this.renderInput.bind(_this);
    _this.renderSuggestions = _this.renderSuggestions.bind(_this);
    return _this;
  } // eslint-disable-line react/destructuring-assignment

  _createClass(GooglePlacesAutocomplete, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initalizeService();
      document.addEventListener('click', this.handleClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClick);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.initialValue) {
        this.setState({ value: nextProps.initialValue });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(ev) {
      if (!ev.target.id.includes('google-places-autocomplete')) {
        this.clearSuggestions();
      }
    }
  }, {
    key: 'changeValue',
    value: function changeValue(value) {
      this.setState({ value: value });
      var debo = this.props.debounce;


      if (value.length > 0) {
        if (debo !== -1) {
          this.debouncedFetchSuggestions();
        }
      } else {
        this.setState({ suggestions: [] });
      }
    }
  }, {
    key: 'initializeService',
    value: function initializeService() {
      var _this2 = this;

      if (!window.google) {
        console.error('[react-google-places-autocomplete]: Google script not loaded'); // eslint-disable-line no-console
        setTimeout(function () {
          _this2.initalizeService();
        }, 1000);

        return;
      }

      if (!window.google.maps) {
        console.error('[react-google-places-autocomplete]: Google maps script not loaded'); // eslint-disable-line no-console
        setTimeout(function () {
          _this2.initalizeService();
        }, 1000);

        return;
      }

      if (!window.google.maps.places) {
        console.error('[react-google-places-autocomplete]: Google maps places script not loaded'); // eslint-disable-line no-console
        setTimeout(function () {
          _this2.initializeService();
        }, 1000);

        return;
      }

      this.placesService = new window.google.maps.places.AutocompleteService();
      this.setState({
        placesServiceStatus: window.google.maps.places.PlacesServiceStatus.OK
      });
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _this3 = this;

      var value = this.state.value,
          _props = this.props,
          inputClassName = _props.inputClassName,
          inputStyle = _props.inputStyle,
          placeholder = _props.placeholder,
          renderInput = _props.renderInput,
          required = _props.required;


      if (renderInput) {
        return renderInput({
          autoComplete: 'off',
          id: 'google-places-autocomplete-input',
          value: value,
          onChange: function onChange(_ref) {
            var target = _ref.target;
            return _this3.changeValue(target.value);
          },
          onKeyDown: this.handleKeyDown,
          type: 'text',
          placeholder: placeholder,
          required: required,
          fetchSuggestions: this.fetchSuggestions
        });
      }

      return _react2.default.createElement('input', {
        autoComplete: 'off',
        className: inputClassName || 'google-places-autocomplete__input',
        id: 'google-places-autocomplete-input',
        onChange: function onChange(_ref2) {
          var target = _ref2.target;
          return _this3.changeValue(target.value);
        },
        onKeyDown: this.handleKeyDown,
        placeholder: placeholder,
        style: inputStyle,
        type: 'text',
        value: value
      });
    }
  }, {
    key: 'renderSuggestions',
    value: function renderSuggestions() {
      var _this4 = this;

      var _state = this.state,
          activeSuggestion = _state.activeSuggestion,
          suggestions = _state.suggestions,
          _props2 = this.props,
          renderSuggestions = _props2.renderSuggestions,
          suggestionsClassNames = _props2.suggestionsClassNames,
          suggestionsStyles = _props2.suggestionsStyles;


      if (suggestions.length === 0) {
        return null;
      }

      if (renderSuggestions) {
        return renderSuggestions(activeSuggestion, suggestions, this.onSuggestionSelect);
      }

      return _react2.default.createElement(
        'div',
        {
          id: 'google-places-suggestions-container',
          className: suggestionsClassNames.container || 'google-places-autocomplete__suggestions-container',
          style: suggestionsStyles.container
        },
        suggestions.map(function (suggestion, index) {
          return _react2.default.createElement(
            'div',
            {
              id: 'google-places-autocomplete-suggestion--' + index,
              key: suggestion.id,
              className: (suggestionsClassNames.suggestion || 'google-places-autocomplete__suggestion') + ' ' + (activeSuggestion === index ? suggestionsClassNames.suggestionActive || 'google-places-autocomplete__suggestion--active' : ''),
              style: suggestionsStyles.suggestion,
              onClick: function onClick(event) {
                return _this4.onSuggestionSelect(suggestion, event);
              },
              role: 'presentation'
            },
            suggestion.description
          );
        })
      );
    }
  }, {
    key: 'renderLoader',
    value: function renderLoader() {
      var loader = this.props.loader;


      if (loader) {
        return loader;
      }

      return _react2.default.createElement(
        'div',
        { className: 'google-places-autocomplete__suggestions-container' },
        _react2.default.createElement(
          'div',
          { className: 'google-places-autcomplete__suggestions' },
          'Loading...'
        )
      );
    }
  }, {
    key: 'onSuggestionSelect',
    value: function onSuggestionSelect(suggestion) {
      var ev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (ev) {
        ev.stopPropagation();
      }

      var onSelect = this.props.onSelect;


      this.setState({
        activeSuggestion: null,
        suggestions: [],
        value: suggestion.description
      });

      onSelect(suggestion);
    }
  }, {
    key: 'fetchSuggestionsCallback',
    value: function fetchSuggestionsCallback(suggestions, status) {
      var placesServiceStatus = this.state.placesServiceStatus;


      if (status !== placesServiceStatus) {
        // show error
      }

      this.setState({
        loading: false,
        suggestions: suggestions || []
      });
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      var _state2 = this.state,
          activeSuggestion = _state2.activeSuggestion,
          suggestions = _state2.suggestions,
          value = _state2.value;
      var propValue = this.props.value;


      switch (event.key) {
        case 'Enter':
          event.preventDefault();
          if (activeSuggestion !== null) {
            this.onSuggestionSelect(suggestions[activeSuggestion]);
          } else if (value.length > 0 || propValue.length > 0) {
            this.fetchSuggestions();
          }
          break;
        case 'ArrowDown':
          this.changeActiveSuggestion(1);
          break;
        case 'ArrowUp':
          this.changeActiveSuggestion(-1);
          break;
        case 'Escape':
          this.clearSuggestions();
          break;
        default:
      }
    }
  }, {
    key: 'clearSuggestions',
    value: function clearSuggestions() {
      this.setState({
        activeSuggestion: null,
        suggestions: []
      });
    }
  }, {
    key: 'changeActiveSuggestion',
    value: function changeActiveSuggestion(direction) {
      var suggs = this.state.suggestions;


      if (suggs.length === 0) {
        return;
      }

      switch (direction) {
        case 1:
          this.setState(function (_ref3) {
            var activeSuggestion = _ref3.activeSuggestion,
                suggestions = _ref3.suggestions;

            if (activeSuggestion === null || activeSuggestion === suggestions.length - 1) {
              return { activeSuggestion: 0 };
            }

            return { activeSuggestion: activeSuggestion + 1 };
          });
          break;
        case -1:
          this.setState(function (_ref4) {
            var activeSuggestion = _ref4.activeSuggestion,
                suggestions = _ref4.suggestions;

            if (!activeSuggestion) {
              return { activeSuggestion: suggestions.length - 1 };
            }

            return { activeSuggestion: activeSuggestion - 1 };
          });
          break;
        default:
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;


      return _react2.default.createElement(
        'div',
        { className: 'google-places-autocomplete' },
        this.renderInput(),
        loading ? this.renderLoader() : this.renderSuggestions()
      );
    }
  }]);

  return GooglePlacesAutocomplete;
}(_react.Component);

GooglePlacesAutocomplete.propTypes = {
  autocompletionRequest: _customPropTypes.autocompletionRequestType,
  debounce: _propTypes2.default.number,
  initialValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  inputClassName: _propTypes2.default.string,
  inputStyle: _propTypes2.default.object,
  loader: _propTypes2.default.node,
  onSelect: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  renderInput: _propTypes2.default.func,
  renderSuggestions: _propTypes2.default.func,
  suggestionsClassNames: _customPropTypes.suggestionClassNamesType,
  suggestionsStyles: _customPropTypes.suggestionStylesType,
  required: _propTypes2.default.bool
};

GooglePlacesAutocomplete.defaultProps = {
  autocompletionRequest: {},
  debounce: -1,
  initialValue: '',
  value: '',
  inputClassName: '',
  inputStyle: {},
  loader: null,
  onSelect: function onSelect() {},
  placeholder: 'Address',
  renderInput: undefined,
  renderSuggestions: undefined,
  suggestionsClassNames: {
    container: '',
    suggestion: '',
    suggestionActive: ''
  },
  suggestionsStyles: {
    container: {},
    suggestion: {}
  },
  required: false
};

exports.default = GooglePlacesAutocomplete;