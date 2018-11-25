module.exports.themes = [
    {
        name: 'nord',
        displayName: 'Nord',
        theme: {
            background: {
                default: '#2e3440',
                success: '#a3be8c',
                notice: '#81a1c1',
                warning: '#ebcb8b',
                danger: '#bf616a',
                surprise: '#b48ead',
                info: '#eceff4'
            },
            foreground: {
                default: '#e5e9f0'
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
                        default: '#e5e9f0'
                    },
                    foreground: {
                        default: '#2e3440'
                    }
                },
                sidebar: {
                    background: {
                        default: '#2e3440',
                        success: '#a3be8c',
                        notice: '#81a1c1',
                        warning: '#ebcb8b',
                        danger: '#bf616a',
                        surprise: '#b48ead',
                        info: '#eceff4'
                    },
                    foreground: {
                        default: 'e0e0e0'
                    },
                    highlight: {
                        default: '#88c0d0'
                    }
                },
                sidebarHeader: {
                    background: {
                        default: '#81a1c1'
                    },
                    foreground: {
                        default: '#4c566a'
                    }
                },
                paneHeader: {
                    foreground: {
                        default: '#434c5e'
                    },
                    background: {
                        default: '#e5e9f0',
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
                        default: '#2e3440',
                        success: '{{ styles.sidebar.background.success }}',
                        notice: '{{ styles.sidebar.background.notice }}',
                        warning: '{{ styles.sidebar.background.warning }}',
                        danger: '{{ styles.sidebar.background.danger }}',
                        surprise: '{{ styles.sidebar.background.surprise }}',
                        info: '{{ styles.sidebar.background.info }}'
                    },
                    foreground: {
                        default: '#eceff4'
                    },
                    highlight: {
                        default: '#88c0d0'
                    }
                }
            }
        }
    }]