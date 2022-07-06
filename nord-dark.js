const sidebarBackground = {
    default: '#2e3440',
    success: '#a3be8c',
    notice: '#81a1c1',
    warning: '#ebcb8b',
    danger: '#bf616a',
    surprise: '#b48ead',
    info: '#eceff4'
}

module.exports = {
    name: 'nord-dark',
    displayName: 'Nord (dark)',
    theme: {
        background: {
            default: '#2e3440',
            success: '#a3be8c',
            notice: '#8fbcbb',
            warning: '#ebcb8b',
            danger: '#bf616a',
            surprise: '#b48ead',
            info: '#88c0d0'
        },
        foreground: {
            default: '#e5e9f0',
            info: '#5e81ac'
        },
        styles: {
            transparentOverlay: {
                background: {
                    default: 'rgba(46, 52, 64, 0.8)'
                },
                foreground: {
                    default: '#d8dee9'
                }
            },
            dialog: {
                background: {
                    default: '#434c5e'
                },
                foreground: {
                    default: '#e5e9f0'
                }
            },
            sidebar: {
                background: sidebarBackground,
                foreground: {
                    default: '#e5e9f0'
                },
                highlight: {
                    default: '#88c0d0'
                }
            },
            sidebarHeader: {
                background: {
                    default: '#4c566a'
                },
                foreground: {
                    default: '#eceff4'
                }
            },
            paneHeader: {
                foreground: {
                    default: '#d8dee9'
                },
                background: {
                    default: '#2e3440',
                    success: '#a3be8c',
                    notice: '#81a1c1',
                    warning: '#ebcb8b',
                    danger: '#bf616a',
                    surprise: '#b48ead',
                    info: '#eceff4'
                }
            },
            pane: {
                background: {
                    ...sidebarBackground,
                    default: '#2e3440',
                },
                foreground: {
                    default: '#e5e9f0'
                },
                highlight: {
                    default: '#eceff4'
                }
            }
        }
    }
}