const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(
      function ({ addUtilities, addComponents, e, prefix, config, addBase, theme, addVariant }) {
        addVariant('optional', '&:optional')
        addVariant('hocus', ['&:hover', '&:focus'])
        addVariant('supports-grid', '@supports (display:grid)')
        addBase({
          'h1': { fontSize: theme('fontSize.2xl') },
          'h2': { fontSize: theme('fontSize.xl') },
          'h3': { fontSize: theme('fontSize.lg') },
        })
        const profiles = {
          // Profile css
          '.profile-container': {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            minHeight: 'fit-content',
          },
          '.profile-parent': {
            display: 'flex',
            alignItems: 'center',
            color: 'aliceblue',
          },
          '.profile-details-name': {
            fontSize: '24px',
            fontFamily: "Poppins SemiBold",
          },
          '.profile-details-role': {
            display: 'flex',
            flexDirection: 'column',
            margin: '14px 0px 24px 0px'
          },
          '.profile-details-role h1': {
            fontSize: '40px',
            fontFamily: "cursive",
          },
          '.primary-text': {
            color: '(--white)',
          },
          '.highlighted-text': {
            color: 'var(--dark-orange)',
          },
          '.profile-role-tagline': {
            fontSize: '19px',
            margin: '5px 0 0 0',
            fontFamily: 'Poppins Light',
          },
          '.profile-options .highlighted-btn': {
            margin: '0 0 0 28px',
            '&:hover': {
              margin: '0 0 0 28px',
              backgroundColor: 'cornsilk',
              color: '#111'
            }
          },
          '.profile-picture': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 1px 0px 0px var(--orange)',
            borderRadius: '50%',
            height: '380px',
            width: '380px',
            margin: '0 0px 0 100px'
          },
          '.profile-picture-background': {
            height: '92%',
            width: '92%',
            backgroundImage: 'url(".//assets/Home/profilephoto.jpg")',
            backgroundSize: 'cover',
            borderRadius: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            '&:hover': {
              transform: 'scale(1.07)',
              transition: '1s ease-out',
            }
          },
          '.colz .colz-icon': {
            color: 'white',
            padding: '8px',
            paddingLeft: '0px',
          },
          '.colz .colz-icon i': {
            '&:hover': {
              transform: 'scale(1.5)'
            }
          },
          '@media screen and (max-width: 1110px)': {
            '.profile-picture': {
              margin: '0 0px 0 80px',
            },
            '.profile-details-name': {
              fontSize: '20px'
            },
            '.profile-details-role .primary-text': {
              fontSize: '12px'
            },
            '.profile-options .btn': {
              width: '120px',
              padding: '11px 0',
              zIndex: '700'
            },
            '.footer-parent': {
              display: 'flex',
              alignItems: 'flex-end'
            },
          },
          // @media
          '@media screen and (max-width: 910px)': {
            '.profile-picture': {
              height: '320px',
              width: '320px',
              margin: '0 0 0 4px'
            },
          },
          '@media screen and (max-width: 810px)': {
            '.profile-picture': {
              margin: '0 !important',
            },
            '.profile-parent': {
              flexDirection: 'column-reverse',
              margin: '40px 0 0 0',
            },
            '.profile-options': {
              display: 'flex',
              justifyContent: 'space-between'
            },
            '.profile-details': {
              margin: '25px 0 0'
            },
            '.profile-options .highlighted-btn': {
              margin: '0 !important',
            },
            '.profile-options .profile-details-role': {
              textAlign: 'center'
            },
          },
          '@media screen and (max-width: 375px)': {
            '.profile-picture': {
              height: '257px',
              width: '257px',
              margingTop: '-90px',
            },
            '.profile-details': {
              width: '90%',
            }
          }

        }
        // buttons
        const buttons = {
          '.btn': {
            borderRadius: '50px',
            padding: '14px 0px',
            width: '160px',
            cursor: 'pointer',
            transition: '0.2s',
            fontFamily: "Poppins SemiBold",
            '&:active': {
              transform: 'translateY(2px)'
            },
          },
          '.primary-btn': {
            color: 'var(--white)',
            border: '2px solid linen',
            fontSize: '12px',
            backgroundColor: '#1f2235',
            '&:hover': {
              color: 'aliceblue',
              border: '2px solid #ff5823',
              backgroundColor: '#1f2235'
            }
          },
          '.highlighted-btn': {
            color: 'var(--white)',
            fontSize: '12px',
            backgroundColor: '#ff5823',
            '@media only screen and (max-width: 568px)': {
              zIndex: '-900px',
            }
          },
          '.red-border': {
            border: '1px solid var(--error-message) !important',
          },
          '.fade-in': {
            opacity: '0px',
            transform: 'translateY(80px)',
            transition: 'all 0.8s ease'
          }
        }

        const footers = {
          '.footer-container': {
            height: '17.8%',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center'
          },
          '.footer-parent': {
            width: '100%',
            height: '100%',
            maxWidth: '1920px'
          },
          '.footer-parent img': {
            maxWidth: '100%',
            height: '130px',
          },

          '@media screen and (max-width: 1110px)': {
            '.footer-parent': {
              display: 'flex',
              alignItems: 'flex-end'
            },
          },
        }

        const homes = {
          '.home-container': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '10vh !important',
            minHeight: '670px',
            backgroundImage: 'linear-gradient(to right, #0c2a7b, #132f7a, #193379, #1f3778, #253b76, #2d4d82, #3a5e8d, #4a7097, #6d94ae, #98b8c6, #c9dce0, #fdffff)'
          }
        }
        addComponents(buttons)
        addComponents(profiles)
        addComponents(footers)
        addComponents(homes)
      }
    ),
  ],
}