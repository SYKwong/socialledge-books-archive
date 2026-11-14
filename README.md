# SocialLedge Books Archive

Preserved SJSU CmpE & Embedded Systems course documentation from [Wayback Machine snapshots](https://web.archive.org/web/*/http://books.socialledge.com/) of `http://books.socialledge.com/`, converted to Markdown and served with [Astro Starlight](https://starlight.astro.build/).

## Archived Books

- [SJSU: Embedded Drivers & RTOS](src/content/docs/sjsu---embedded-drivers-rtos/index.md) (44 pages)
- [SJSU - CmpE243 - Industrial Applications with CAN Bus](src/content/docs/sjsu---cmpe243--industrial-applications-with-can-bus/index.md) (20 pages)
- [SJSU - Advanced Microcomputer Design](src/content/docs/sjsu---advanced-microcomputer-design/index.md) (11 pages)
- [RTOS](src/content/docs/rtos/index.md) (12 pages)
- [FreeRTOS](src/content/docs/freertos/index.md) (6 pages)
- [Useful Knowledge](src/content/docs/useful-knowledge/index.md) (7 pages)

## Development

```bash
npm install
npm run dev      # Start local dev server
npm run build    # Build static site to dist/
npm run preview  # Preview built site
```

All Markdown pages and extracted assets live under `src/content/docs/<book-slug>/`.
Source snapshot timestamps are recorded in [manifest.json](manifest.json).

## Attribution & Takedown Requests

This repository is an archival mirror created for educational preservation from publicly available [Wayback Machine snapshots](https://web.archive.org/web/*/http://books.socialledge.com/) of `http://books.socialledge.com/`. All original content belongs to its respective authors and contributors.

If you are the original author or copyright holder and would like any material modified or removed, please open an issue in this repository (or contact the repository maintainer directly) and it will be taken down promptly.
