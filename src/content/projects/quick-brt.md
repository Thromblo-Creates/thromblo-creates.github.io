---
title: Quick BRT
tagline: A Windows desktop tool for batch-removing black image backgrounds and resizing for Discord workflows.
category: desktop-app
status: released
tags: [Batch Editor, Background Removal, Image Resizer, Discord Workflow]
tech: [Python, PySide6, Pillow, NumPy, OpenCV]
accent: "#2bb3c0"
featured: false
order: 4
year: 2025
---

Quick BRT is a Windows 11 desktop app for batch-removing solid black image
backgrounds and batch-resizing images, built around a fast Discord asset workflow.
It removes only edge-connected black backgrounds, so black details inside the
subject are preserved.

## Features

- **Drag and drop** images or whole folders.
- **Smart background removal** that only clears edge-connected black, keeping interior detail.
- **Transparent WebP output** by default, with a PNG fallback for lossless transparency.
- **Discord-oriented size targets** with automatic quality reduction and optional resize only when needed.
- **Image Resizer tab** with exact scale presets, custom dimensions, and aspect-ratio plus long-edge modes.
- **Fit, fill / crop, and stretch** resize behaviors, with automatic dimension and aspect-ratio detection.
- **Parallel batch processing** with an automatic CPU-based worker count.
- **OLED-optimized true-black UI**.

## Tech

A PySide6 desktop app using Pillow, NumPy, and OpenCV for image processing. It ships
with a Windows launcher that provisions a virtual environment and dependencies, and a
PyInstaller build for a standalone executable.
