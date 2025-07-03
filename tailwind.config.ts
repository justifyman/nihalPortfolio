import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		fontFamily: {
			times: ['Times New Roman', 'serif'],
			sf: ['"San Francisco"', 'sans-serif'],
			daniel: ['Daniel', 'sans-serif'],
			greeting: ['"Comic Sans MS"', 'cursive']
		},
		extend: {
			colors: {
				border: {
					DEFAULT: 'hsl(var(--border))',
					light: 'hsl(0, 0%, 92%)', // Changed from 85% to 92%
					dark: 'hsl(0, 0%, 15%)'
				},
				input: {
					DEFAULT: 'hsl(var(--input))',
					light: 'hsl(0, 0%, 98%)', // Changed from 95% to 98%
					dark: 'hsl(0, 0%, 5%)'
				},
				ring: {
					DEFAULT: 'hsl(var(--ring))',
					light: 'hsl(0, 0%, 95%)', // Changed from 90% to 95%
					dark: 'hsl(0, 0%, 10%)'
				},
				background: 'hsl(var(--background))',
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					light: 'hsl(0, 0%, 10%)',
					dark: 'hsl(0, 0%, 90%)'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: {
						DEFAULT: 'hsl(var(--muted-foreground))',
						light: 'hsl(0, 0%, 30%)',
						dark: 'hsl(0, 0%, 70%)'
					}
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
