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
            height: '10%',
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
            margin: '14px 0px 24px 0px',
          },
          '.profile-details-role h1': {
            fontSize: '40px',
            fontFamily: "cursive",
          },
          '.primary-text': {
            color: '#ffffff',
          },
          '.highlighted-text': {
            color: '#ff5823',
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
              color: '#111',
            }
          },
          '.profile-picture': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 1px 0px 0px #ff5823',
            borderRadius: '50%',
            height: '380px',
            width: '380px',
            margin: '0 0px 0 100px',
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
            color: '#ffffff',
            padding: '8px',
            paddingLeft: '0px',
          },
          '.colz .colz-icon i': {
            '&:hover': {
              transform: 'scale(1.5)',
            }
          },
          '@media screen and (max-width: 1110px)': {
            '.profile-picture': {
              margin: '0 0px 0 80px',
            },
            '.profile-details-name': {
              fontSize: '20px',
            },
            '.profile-details-role .primary-text': {
              fontSize: '12px',
            },
            '.profile-options .btn': {
              width: '120px',
              padding: '11px 0',
              zIndex: '700',
            },
            '.footer-parent': {
              display: 'flex',
              alignItems: 'flex-end',
            },
          },
          // @media
          '@media screen and (max-width: 910px)': {
            '.profile-picture': {
              height: '320px',
              width: '320px',
              margin: '0 0 0 4px',
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
              margin: '25px 0 0',
            },
            '.profile-options .highlighted-btn': {
              margin: '0 !important',
            },
            '.profile-options .profile-details-role': {
              textAlign: 'center',
            },
          },
          '@media screen and (max-width: 375px)': {
            '.profile-picture': {
              height: '257px',
              width: '257px',
              marginTop: '-90px',
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
              transform: 'translateY(2px)',
            },
          },
          '.primary-btn': {
            color: '#ffffff',
            border: '2px solid linen',
            fontSize: '12px',
            backgroundColor: '#193379',
            '&:hover': {
              color: 'aliceblue',
              border: '2px solid #ff5823',
              backgroundColor: '#193379',
            }
          },
          '.highlighted-btn': {
            color: '#ffffff',
            fontSize: '12px',
            backgroundColor: '#ff5823',
            '@media only screen and (max-width: 568px)': {
              zIndex: '-900px',
            }
          },
          '.red-border': {
            border: '1px solid #e44f4fd1 !important',
          },
          '.fade-in': {
            opacity: '0px',
            transform: 'translateY(80px)',
            transition: 'all 0.8s ease',
          }
        }

        const footers = {
          '.footer-container': {
            height: '17.8%',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
          },
          '.footer-parent': {
            width: '100%',
            height: '100%',
            maxWidth: '1920px',
          },
          '.footer-parent img': {
            maxWidth: '100%',
            height: '100%',
          },

          '@media screen and (max-width: 1110px)': {
            '.footer-parent': {
              display: 'flex',
              alignItems: 'flex-end',
            },
          },
        }

        const homes = {
          '.home-container': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '670px',
            backgroundImage: 'linear-gradient(to right, #0c2a7b, #132f7a, #193379, #1f3778, #253b76, #2d4d82, #3a5e8d, #4a7097, #6d94ae, #98b8c6, #c9dce0, #fdffff)',
          }
        }

        const headers = {
          '.header-container': {
            display: 'flex',
            justifyContent: 'center',
            height: '140px',
            color: '#ffffff',
          },
          '.header-parent': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            width: '70%',
            color: '#ffffff',
          },
          '.header-logo': {
            fontSize: '50px',
            fontFamily: 'Poppins ExtraBold',
            color: '#ffffff',
          },
          '.header-options': {
            display: 'flex',
            alignItems: 'center',
          },
          '.header-option': {
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: '600',
          },
          '.header-hamburger': {
            display: 'none',
            color: '#ffffff',
          },
          '.header-option-seperator': {
            margin: '0 50px 0 0',
            color: '#ffffff',
          },
          '.selected-header-option': {
            color: '#ff5823',
          },

          '@media only screen and (max-width: 1110px)': {
            '.header-parent': {
              width: '80%',
            }
          },
          '@media only screen and (max-width: 970px)': {
            '.header-hamburger': {
              display: 'block',
            },
            '.header-parent': {
              width: '100%',
              padding: '0 40px',
              position: 'relative',
            },
            '.header-options': {
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              left: '-100%',
              top: '0px',
              height: '100vh',
              width: '100%',
              justifyContent: 'space-around',
              backgroundColor: '#1f2235',
              zIndex: '1000',
              opacity: '0.8',
              transition: 'all 0.8s ease-out',
            },
            '.header-option-seperator': {
              margin: '0',
            },
            '.selected-header-option': {
              color: '#ffffff',
            },
            '.header-option': {
              color: '#ffffff',
            },
            '.header-hamburger-bars': {
              fontSize: '30px',
              cursor: 'pointer',
              margin: ' 0px 10px',
              color: '#ffffff',
            },
            '.show-hamburger-options': {
              left: '0',
              opacity: '1',
            }
          }


        }

        const heading = {
          '.heading-container': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            margin: '0 0 50px 0',
          },

          '.screen-sub-heading': {
            letterSpacing: '3px',
            margin: '8px 0 18px 0',
            fontSize: '12px',
            color: '#333333',
          },

          '.screen-heading': {
            fontSize: '32px',
            color: '#1f2235',
            fontFamily: 'Poppins Bold',
          },

          '.heading-seperator': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            width: '180px',
            margin: '10px 0 0 0',
          },

          '.seperator-line': {
            width: '100%',
            height: '2px',
            backgroundColor: '#1f2235',
          },

          '.seperator-blob': {
            height: '10px',
            width: '100%',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '-4px',
          },

          '.seperator-blob div': {
            width: '35px',
            borderRadius: '10px',
            backgroundColor: '#ff5823',
          }
        }

        const aboutMe = {
          '.about-me-container': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '-5px 0 0 0',
            backgroundColor: 'white',
          },
          '.about-me-parent': {
            maxWidth: '1000px',
            width: '70%',
          },
          '.about-me-card': {
            display: 'flex',
            width: '100%',
            boxShadow: '0 0px 20px -2px #1f2235',
          },
          '.about-me-profile': {
            width: '50%',
            backgroundImage: 'url(".//assets/AboutMe/me.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          },
          '.about-me-details': {
            width: '480px',
            textAlign: 'justify',
            padding: '30px',
          },
          '.about-me-description': {
            fontSize: '12px',
          },
          '.about-me-highlights': {
            margin: '80px 0',
          },
          '.highlight-heading': {
            fontFamily: 'poppins Bold',
            fontSize: '14px',
            margin: '0 0 5px 0',
          },

          '.highlight': {
            display: 'flex',
            alignItems: 'center',
            margin: '5px 0',
            fontSize: '12px',
          },
          '.highlight-blob': {
            height: '12px',
            width: '12px',
            margin: '0 10px 0 0',
            backgroundColor: '#ff5823',
            borderRadius: '50%',
          },
          '.about-me-options .highlighted-btn': {
            margin: '0 0 0 30px',
          },

          /*IPAD PRO RESPONSIVENESS */
          '@media only screen and (max-width: 1110px)': {
            '.about-me-parent': {
              width: '88%',
            },
            '.resume-card': {
              width: '880px',
            },
            '.resume-bullet-details': {
              padding: '0px 0px 0px 70px'
            }
          },
          '@media only screen and (max-width: 898px)': {
            '.about-me-profile': {
              display: 'none',
            },
            '.about-me-details': {
              width: '100%',
            },
          },
          '@media only screen and (max-width: 466px)': {
            '.about-me-options': {
              display: 'flex',
              flexDirection: 'column',
            },
            '.about-me-options .highlighted-btn': {
              margin: '24px 0 0 0 !important',
            },
            '.about-me-options button': {
              width: '100%',
            }
          },

        }

        const resume = {
          '.resume-container': {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: 'fit-content',
            margin: '120px 0',
          },
          '.resume-card': {
            display: 'flex',
            height: '360px',
            width: '1000px',
          },
          '.resume-bullets': {
            height: '100%',
            boxShadow: '15px 0 9px -15px #1f2235',
            width: '320px',
          },
          '.resume-bullet-details': {
            flexGrow: '1',
            width: '600px',
            overflow: 'hidden',
            padding: '0 0 0 80px',
          },
          '.experience-description': {
            margin: '10px 0 0 0',
            textAlign: 'justify',
            maxWidth: '100%',
          },
          '.resume-details-carousal': {
            transition: 'transform 1s ease-out',
          },
          '.bullet-container': {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            position: 'relative',
          },
          '.bullets': {
            width: '80%',
            position: 'relative',
            zIndex: '2',
          },
          '.bullet': {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#193379',
            height: '40px',
            margin: '15px 0',
            padding: '0 8px',
            borderRadius: '20px',
            width: '30px',
            transition: 'width 0.6s ease',
            cursor: 'pointer',
          },
          '.bullet-label': {
            fontSize: '14px',
            whiteSpace: 'nowrap',
            fontFamily: 'Poppins SemiBold',
          },
          '.bullet-logo': {
            height: '16px',
            margin: '0 30px 0 0',
          },
          '.bullet-icons': {
            width: '34px',
            height: '100%',
            zIndex: '1',
            backgroundColor: '#193379',
            position: 'absolute',
          },
          '.selected-bullet': {
            color: 'white',
            width: '100%',
          },
          '.resume-screen-container': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '360px',
            width: '100%',
          },
          '.resume-heading': {
            display: 'flex',
            flexDirection: 'column',
          },
          '.resume-main-heading': {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
          },
          '.heading-bullet': {
            position: 'absolute',
            left: '-30px',
            height: '15px',
            width: '15px',
            top: '5px',
            backgroundColor: '#ff5823',
            borderRadius: '50%',
          },
          '.resume-sub-heading': {
            fontSize: '14px',
            fontFamily: 'Poppin SemiBold',
            color: '#111',
            margin: '10px 0 0 0',
          },
          '.resume-heading-description': {
            fontSize: '12px',
            textAlign: 'justify',
          },
          '.heading-date': {
            backgroundColor: '#ff5823',
            padding: '4px 12px',
            fontSize: '14px',
            borderRadius: '14px',
            color: 'white',
          },
          '.skill-parent': {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: '50%'
          },
          '.programming-skills-container': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          },
          '.skill-percentage': {
            position: 'relative',
            height: '15px',
            width: '70%',
            backgroundColor: '#ff5823',
          },
          '.skill-percentage .active-percentage-bar': {
            height: '15px',
            transition: '0.8s ease',
            backgroundColor: '#193379',
          },
          '.skill-parent span': {
            fontFamily: 'Poppins SemiBold',
            fontSize: '16px',
            color: '#ff5823',
          },
          '@media only screen and (max-width: 1023px)': {
            '.resume-content': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
          } 

        } 

        addComponents(heading)
        addComponents(headers)
        addComponents(homes)
        addComponents(profiles)
        addComponents(resume)
        addComponents(aboutMe)
        addComponents(buttons)
        addComponents(footers)
      }
    ),
  ],
}