import { generateMetadataFn } from '@/components/WithRealTimeUpdates/generateMetadataFn';
import { generateWrapper } from '@/components/WithRealTimeUpdates/generateWrapper';
import type { BuildVariablesFn } from '@/components/WithRealTimeUpdates/types';
import Content from './Content';
import RealTime from './RealTime';
import { query, type PageProps, type Query, type Variables } from './meta';

const buildVariables: BuildVariablesFn<PageProps, Variables> = ({
  params,
  fallbackLocale,
}) => ({
  locale: params.locale,
  fallbackLocale: [fallbackLocale],
  slug: params.slug,
});

export const generateMetadata = generateMetadataFn<PageProps, Query, Variables>(
  {
    query,
    buildVariables,
    generate: (data) => data.documentationPage?.seo,
  },
);
const Page = generateWrapper<PageProps, Query, Variables>({
  query,
  buildVariables: ({ params, fallbackLocale }) => ({
    locale: params.locale,
    fallbackLocale: [fallbackLocale],
    slug: params.slug,
  }),
  contentComponent: Content,
  realtimeComponent: RealTime,
});

export default Page;