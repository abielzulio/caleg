# Caleg

An unofficial API Node.js SDK for getting the list of candidates for the 2024 Indonesian General Election. REST API is provided by [Zakiego](https://caleg.zakiego.com/).

## Installation

```bash
npm install caleg
```

## Usage

```typescript
import { Caleg } from "caleg"

const caleg = new Caleg()
```

### DPD

```typescript
const dapiList = await caleg.dpd.getDapilList()
const dapil = await caleg.dpd.getDapil("11")
const calon = await caleg.dpd.getCalon("aceh/6")
```

### DPR

```typescript
const dapiList = await caleg.dpr.getDapilList()
const dapil = await caleg.dpr.getDapil("11")
const calon = await caleg.dpr.getCalon("aceh/6")
```
