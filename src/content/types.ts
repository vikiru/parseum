// This file provides TypeScript types for content slugs
export type DocsSlug =
  // Getting Started
  | 'getting-started/prerequisites'
  | 'getting-started/setup'
  | 'getting-started/test'
  | 'getting-started/features'
  
  // Development
  | 'development/stack'
  | 'development/scripts'
  
  // Syntax
  | 'syntax/syntax'
  
  // Basic Syntax
  | 'syntax/basic/paragraph'
  | 'syntax/basic/header'
  | 'syntax/basic/horizontal-rule'
  | 'syntax/basic/list'
  | 'syntax/basic/link'
  | 'syntax/basic/image'
  
  // Formatting Syntax
  | 'syntax/formatting/italic'
  | 'syntax/formatting/bold'
  | 'syntax/formatting/bold-italic'
  | 'syntax/formatting/code'
  | 'syntax/formatting/emphasis'
  
  // Extended Syntax
  | 'syntax/extended/auto-link'
  | 'syntax/extended/blockquote'
  | 'syntax/extended/code-block'
  | 'syntax/extended/definition-list'
  | 'syntax/extended/task-list'
  | 'syntax/extended/strikethrough'
  | 'syntax/extended/subscript'
  | 'syntax/extended/superscript'
  
  // Excluded Syntax
  | 'syntax/excluded/html'
  | 'syntax/excluded/comment';

export type ValidSlug = DocsSlug;
