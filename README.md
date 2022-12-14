Github Project: https://github.com/orgs/digital-taco/projects/1/views/1

NOTE: You must use Node 16.

# Purpose

The purpose of this repository is to work as a base library for any given React component library. It will provide the tools needed to build your own React component library with relative easy. It will include a set of basic components and a configurable theming system.


# Theming System

The theming system is built around CSS variables that affect global values used by the base components and CSS classes to determine their output.

## CSS Variable Prefixes

NOTE: this is definitely going to change

## --global-*

These are global values and modifiers. These are used by all other variables when determining their values.

## --interactive-*

Affects only interactive styling. This affecst elements such as buttons and clickable list-items.

## --text-*

Affects text styling only. Note that this overlaps with some of the other prefixes, such as the `--interactive-*` variables.

## --padding-* OR --margin-* OR --spacing-*

TBD


# Color System

## Primary and Secondary Colors

A "primary" and "secondary" color are chosen by the consumer. These are used as the primary colors for the theming system. Light and dark variants are made available based on the base colors.

## Theme Variants

Theme sub variants can be defined. Essentially, these replace the primary and secondary colors, but are not the default colors. Components or containers must be themed to use a specific theme variant.

## Error Color

This is typically red. Not sure if this is really needed.

## DEV Notes

- `import React from 'react'` _must_ be included in every react file that gets built for prod. Otherwise it fails.