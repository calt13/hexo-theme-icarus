const { Component, Fragment } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

/**
 * IndieAuth JSX component.
 * @see https://indieweb.org/IndieAuth
 * @example
 * <IndieAuth
 *   authorization_endpoint="https://indieauth.com/auth"
 *   token_endpoint="https://tokens.indieauth.com/token"
 * />
 */
class IndieAuth extends Component {
  render() {
    const {
      plugin: { authorization_endpoint, token_endpoint },
      head,
    } = this.props;
    if (!head || !authorization_endpoint) {
      return null;
    }
    return (
      <>
        <link rel="authorization_endpoint" href={authorization_endpoint} />
        {token_endpoint ? <link rel="token_endpoint" href={token_endpoint} /> : null}
      </>
    );
  }
}

module.exports = IndieAuth;
